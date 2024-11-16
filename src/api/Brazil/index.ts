import {
	StateProps,
	HolidayProps,
	citiesByStateMap,
	municipalHolidaysMap,
	setHolidays,
	BrazilianAPIProps,
	getStates,
	getCities,
	getHolidays,
	generateStateMapFn
} from "../../types/holidays/"
import {
	isMunicipal,
	cleanName,
	readJsonState,
	hasPassed,
	formatHoliday
} from "./functions"

const citiesByState: citiesByStateMap = new Map()
const municipalHolidays: municipalHolidaysMap = new Map()

const generateStateMap: generateStateMapFn = (rawList, state) => {
	const stateMap = new Map()
	for (const holiday of rawList) {
		const city = holiday.city.toLowerCase()
		const prevArr = stateMap.has(city) ? stateMap.get(city) : []
		prevArr.push(holiday)
		stateMap.set(city, prevArr)
	}
	municipalHolidays.set(state, stateMap)
}
class BrazilianAPI implements BrazilianAPIProps {
	link: string = "https://brasilapi.com.br/api/"
	national: HolidayProps[] = []
	municipal: Map<string, HolidayProps[]> = new Map()
	states: StateProps[] = []
	cities: string[] = []
	now: Date
	constructor() {
		this.now = new Date()
	}

	setNationalHolidays: setHolidays = (rawNationalHolidays) => {
		if (rawNationalHolidays === undefined) return []
		for (const raw of rawNationalHolidays) {
			if (isMunicipal(raw)) break
			const holiday = new Date(raw.date + "GMT-3")
			if (!hasPassed(this.now, holiday)) {
				this.national.push(formatHoliday(raw, holiday))
			}
		}
		return this.national
	}

	getStates: getStates = async () => {
		if (this.states.length === 0) {
			const route = "ibge/uf/v1"
			const response = await fetch(this.link + route)
			const list = await response.json()
			for (const { nome, sigla } of list) {
				this.states.push({ name: nome, twoLetters: sigla })
			}
			return this.states
		} else {
			return this.states
		}
	}
	getCities: getCities = async (state) => {
		if (state === "") return []
		if (!citiesByState.has(state)) {
			this.cities = []
			const route = "ibge/municipios/v1/"
			const response = await fetch(this.link + route + state)
			const list = await response.json()
			for (const { nome } of list) {
				this.cities.push(nome.toLocaleLowerCase())
			}
			citiesByState.set(state, Array.from(this.cities))
			return this.cities
		} else {
			return citiesByState.get(state) || []
		}
	}

	getNationalHolidays: getHolidays = async () => {
		if (this.national.length === 0) {
			const route = "feriados/v1/"
			const year = new Date().getFullYear()
			const response = await fetch(this.link + route + year)
			const list = await response.json()
			const responseNext = await fetch(this.link + route + (year + 1))
			const listNext = await responseNext.json()
			this.setNationalHolidays(list)
			const formatted = this.setNationalHolidays(listNext)
			return formatted
		} else {
			return this.national
		}
	}

	generateStateMap = generateStateMap

	setMunicipalHolidays: setHolidays = (cityHolidays, state, city) => {
		if (state === undefined || city === undefined || cityHolidays === undefined)
			return []
		const formatted = []
		const currYear = this.now.getFullYear()
		const nextYearHolidays = []
		for (const holiday of cityHolidays) {
			if (!isMunicipal(holiday)) break
			const name = `Feriado em ${city} - ${state}`
			const date = new Date(holiday.date)
			const holidayYear = date.getFullYear()
			if (!hasPassed(this.now, date)) {
				formatted.push(formatHoliday(holiday, date, name))
				if (holiday.type === "Permanente" && holidayYear === currYear) {
					nextYearHolidays.push(
						formatHoliday(holiday, date, name, true, this.now)
					)
				}
			}
		}
		formatted.push(...nextYearHolidays)
		this.municipal.set(`${state}-${city}`, formatted)
		return formatted
	}

	getMunicipalHolidays: getHolidays = async (state, city) => {
		if (state === undefined || city === undefined) return []
		const getFormatted = () => {
			const clean = cleanName(city)
			const cityHolidays = municipalHolidays.get(state)?.get(clean)
			const formatted = this.setMunicipalHolidays(cityHolidays, state, city)
			return formatted
		}
		if (!municipalHolidays.has(state)) {
			const list = await readJsonState(state)
			this.generateStateMap(list, state)
			return getFormatted()
		} else if (!this.municipal.has(`${state}-${city}`)) {
			return getFormatted()
		}
		return this.municipal.get(`${state}-${city}`) || []
	}
}
export default BrazilianAPI

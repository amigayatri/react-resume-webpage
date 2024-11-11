import Holiday from "../../types/holidays/HolidayProps"
import StateProps from "../../types/holidays/StateProps"
interface RawHoliday {
	type: string
	date: string
	name: string
}

interface RawMunicipal {
	type: string
	date: string
	city: string
	state: string
}

const citiesByState: Map<string, string[]> = new Map()
const municipalHolidays: Map<string, Map<string, RawMunicipal[]>> = new Map()

const readJsonState = async (state: string) => {
	const response = await fetch(
		"/brazilian-holidays/" + state.toLowerCase() + ".json"
	)
	const list = await response.json()
	return list
}

const cleanName = (cityName: string) => {
	const chars = new Set(cityName)
	let clean = cityName
	const specialMap = new Map([
		["á", "a"],
		["é", "e"],
		["í", "i"],
		["ó", "o"],
		["ú", "u"],
		["ç", "c"],
		["ã", "a"],
		["õ", "o"],
		["à", "a"],
		["â", "a"],
		["ê", "e"],
		["ô", "o"]
	])
	for (const special of specialMap.keys()) {
		if (chars.has(special)) {
			clean = clean.replace(special, specialMap.get(special) || "")
		}
	}
	return clean
}

class BrazilianAPI {
	link: string
	national: Holiday[]
	municipal: Map<string, Holiday[]>
	states: StateProps[]
	cities: string[]
	constructor() {
		this.national = []
		this.link = "https://brasilapi.com.br/api/"
		this.states = []
		this.cities = []
		this.municipal = new Map()
	}

	setNationalHolidays(rawNationalHolidays: RawHoliday[]) {
		const now = new Date()
		const currYear = now.getFullYear()
		const currMonth = now.getUTCMonth()
		const currDay = now.getUTCDate()
		for (const raw of rawNationalHolidays) {
			const holiday = new Date(raw.date + "GMT-3")
			const holidayYear = holiday.getFullYear()
			const holidayMonth = holiday.getUTCMonth()
			const holidayDate = holiday.getUTCDate()
			if (
				holidayYear > currYear ||
				holidayMonth > currMonth ||
				(holidayMonth === currMonth && holidayDate >= currDay)
			) {
				const holidayObj: Holiday = {
					date: holiday,
					name: raw.name,
					type: raw.type
				}
				this.national.push(holidayObj)
			}
		}
		return this.national
	}

	getStates = async () => {
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
	getCities = async (state: string) => {
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
			return citiesByState.get(state)
		}
	}

	getNationalHolidays = async () => {
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

	generateStateMap(rawList: any, state: string) {
		const stateMap = new Map()
		for (const holiday of rawList) {
			const city = holiday.city.toLowerCase()
			const prevArr = stateMap.has(city) ? stateMap.get(city) : []
			prevArr.push(holiday)
			stateMap.set(city, prevArr)
		}
		municipalHolidays.set(state, stateMap)
	}

	setMunicipalHolidays = (
		cityHolidays: RawMunicipal[] | undefined,
		state: string,
		city: string
	) => {
		const formatted: Holiday[] = []
		if (cityHolidays === undefined) return formatted
		const now = new Date()
		const currYear = now.getFullYear()
		const currMonth = now.getMonth()
		const currDay = now.getDate()
		const nextYearHolidays = []
		for (const holiday of cityHolidays) {
			const name = `Feriado em ${city} - ${state}`
			const date = new Date(holiday.date)
			const holidayYear = date.getFullYear()
			const holidayMonth = date.getMonth()
			const holidayDate = date.getDate()
			if (
				holidayYear > currYear ||
				holidayMonth > currMonth ||
				(holidayMonth === currMonth && holidayDate >= currDay)
			) {
				formatted.push({ name, date, type: "municipal" })
				if (holiday.type === "Permanente" && holidayYear === currYear) {
					nextYearHolidays.push({
						name,
						type: "municipal",
						date: new Date(
							holiday.date.replace(
								currYear.toString(),
								(currYear + 1).toString()
							)
						)
					})
				}
			}
		}
		formatted.push(...nextYearHolidays)
		this.municipal.set(`${state}-${city}`, formatted)
		return formatted
	}

	getMunicipalHolidays = async (state: string, city: string) => {
		if (!municipalHolidays.has(state)) {
			const list = await readJsonState(state)
			this.generateStateMap(list, state)
			const clean = cleanName(city)
			const cityHolidays = municipalHolidays.get(state)?.get(clean)
			const formatted = this.setMunicipalHolidays(cityHolidays, state, city)
			return formatted
		} else if (!this.municipal.has(`${state}-${city}`)) {
			const clean = cleanName(city)
			const cityHolidays = municipalHolidays.get(state)?.get(clean)
			const formatted = this.setMunicipalHolidays(cityHolidays, state, city)
			return formatted
		} else {
			return this.municipal.get(`${state}-${city}`)
		}
	}
}
export default BrazilianAPI

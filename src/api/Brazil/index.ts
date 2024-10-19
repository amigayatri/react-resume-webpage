import Holiday from "../../types/HolidayProps"
import StateProps from "../../types/StateProps"

interface RawHoliday {
	type: string
	date: string
	name: string
}

const citiesByState: Map<string, string[]> = new Map()

class BrazilianAPI {
	link: string
	national: Holiday[]
	states: StateProps[]
	cities: string[]
	constructor() {
		this.national = []
		this.link = "https://brasilapi.com.br/api/"
		this.states = []
		this.cities = []
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
}
export default BrazilianAPI

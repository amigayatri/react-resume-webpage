export interface HolidayProps {
	type: string
	date: Date
	name: string
}
export interface StateProps {
	name: string
	twoLetters: string
}
export interface RawHoliday {
	type: string
	date: string
	name: string
}

export interface RawMunicipal {
	type: string
	date: string
	city: string
	state: string
}

export type citiesByStateMap = Map<string, string[]>
export type municipalHolidaysMap = Map<string, Map<string, RawMunicipal[]>>
export type setHolidays = (
	rawHolidays: RawHoliday[] | RawMunicipal[] | undefined,
	state?: string,
	city?: string
) => HolidayProps[]
export type getStates = () => Promise<StateProps[]>
export type getCities = (state: string) => Promise<string[]>
export type getHolidays = (
	state?: string,
	city?: string
) => Promise<HolidayProps[]>
export type generateStateMapFn = (rawList: any, state: string) => void

export interface BrazilianAPIProps {
	link: string
	national: HolidayProps[]
	municipal: Map<string, HolidayProps[]>
	states: StateProps[]
	cities: string[]
	now: Date
	setNationalHolidays: setHolidays
	getStates: getStates
	getCities: getCities
	getNationalHolidays: getHolidays
	generateStateMap: generateStateMapFn
	setMunicipalHolidays: setHolidays
	getMunicipalHolidays: getHolidays
}

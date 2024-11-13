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

export type citiesByStateType = Map<string, string[]>
export type municipalHolidaysType = Map<string, Map<string, RawMunicipal[]>>
export type readJsonStateType = (state: string) => Promise<RawMunicipal[]>
export type cleanNameType = (cityName: string) => string
export type setHolidaysType = (
	rawHolidays: RawHoliday[] | RawMunicipal[] | undefined,
	state?: string,
	city?: string
) => HolidayProps[]
export type getStatesType = () => Promise<StateProps[]>
export type getCitiesType = (state: string) => Promise<string[]>
export type getHolidaysType = (
	state?: string,
	city?: string
) => Promise<HolidayProps[]>
export type generateStateMapType = (rawList: any, state: string) => void
export type isMunicipalType = (
	holiday: RawMunicipal | RawHoliday
) => holiday is RawMunicipal
export type getDateArrType = (date: Date) => number[]
export type hasPassedType = (now: Date, holiday: Date) => boolean
export type formatHolidayType = (
	raw: RawHoliday | RawMunicipal,
	holiday: Date,
	name?: string,
	isNextYear?: boolean,
	now?: Date
) => HolidayProps

export interface BrazilianAPIProps {
	link: string
	national: HolidayProps[]
	municipal: Map<string, HolidayProps[]>
	states: StateProps[]
	cities: string[]
	now: Date
	setNationalHolidays: setHolidaysType
	getStates: getStatesType
	getCities: getCitiesType
	getNationalHolidays: getHolidaysType
	generateStateMap: generateStateMapType
	setMunicipalHolidays: setHolidaysType
	getMunicipalHolidays: getHolidaysType
}

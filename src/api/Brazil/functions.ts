import { iconKey } from "../../icons"
import { iconExists } from "../../icons/maps/functions"
import { RawMunicipal, HolidayProps, RawHoliday } from "../../types/holidays"

type readJsonState = (state: string) => Promise<RawMunicipal[]>
export const readJsonState: readJsonState = async (state) => {
	const response = await fetch(
		"/brazilian-holidays/" + state.toLowerCase() + ".json"
	)
	const list = await response.json()
	return list
}

type cleanName = (cityName: string) => string
export const cleanName: cleanName = (cityName: string) => {
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

type isMunicipal = (
	holiday: RawMunicipal | RawHoliday
) => holiday is RawMunicipal
export const isMunicipal: isMunicipal = (holiday) => {
	return "city" in holiday
}

type getDateArr = (date: Date) => number[]
export const getDateArr: getDateArr = (date) => {
	const year = date.getFullYear()
	const month = date.getUTCMonth()
	const day = date.getUTCDate()
	return [year, month, day]
}
type hasPassed = (now: Date, holiday: Date) => boolean
export const hasPassed: hasPassed = (now, holiday) => {
	const [currYear, currMonth, currDay] = getDateArr(now)
	const [holidayYear, holidayMonth, holidayDate] = getDateArr(holiday)
	if (
		holidayYear > currYear ||
		holidayMonth > currMonth ||
		(holidayMonth === currMonth && holidayDate >= currDay)
	) {
		return false
	}
	return true
}

type getNextYearDate = (date: string, currYear: number) => Date
const getNextYearDate: getNextYearDate = (date, currYear) => {
	return new Date(
		date.replace(currYear.toString(), (currYear + 1).toString())
	)
}
type formatHoliday = (
	raw: RawHoliday | RawMunicipal,
	holiday: Date,
	name?: string,
	isNextYear?: boolean,
	now?: Date
) => HolidayProps
export const formatHoliday: formatHoliday = (
	raw,
	holiday,
	customName,
	isNextYear,
	now
) => {
	if (isMunicipal(raw)) {
		const holidayObj: Partial<HolidayProps> = { type: "Municipal" }
		holidayObj.name = customName !== undefined ? customName : ""
		if (isNextYear === true && now !== undefined) {
			const [currYear] = getDateArr(now)
			holidayObj.date = getNextYearDate(raw.date, currYear)
		} else {
			holidayObj.date = holiday
		}
		return holidayObj as HolidayProps
	} else {
		const { name, type } = raw
		return {
			name,
			type,
			date: holiday
		}
	}
}

type getStateIcon = (state: string) => iconKey
export const getStateIcon: getStateIcon = (state) => {
	let asArr = state.split("")
	const withoutSpace = cleanName(
		asArr
			.filter((char) => char !== " ")
			.join("")
			.toLowerCase()
	)
	if (iconExists(withoutSpace)) return withoutSpace as iconKey
	return "brasil"
}

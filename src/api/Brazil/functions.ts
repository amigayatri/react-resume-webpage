import {
	readJsonStateType,
	cleanNameType,
	isMunicipalType,
	getDateArrType,
	hasPassedType,
	formatHolidayType,
	HolidayProps
} from "../../types/holidays"

export const readJsonState: readJsonStateType = async (state) => {
	const response = await fetch(
		"/brazilian-holidays/" + state.toLowerCase() + ".json"
	)
	const list = await response.json()
	return list
}

export const cleanName: cleanNameType = (cityName: string) => {
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
export const isMunicipal: isMunicipalType = (holiday) => {
	return "city" in holiday
}
export const getDateArr: getDateArrType = (date) => {
	const year = date.getFullYear()
	const month = date.getUTCMonth()
	const day = date.getUTCDate()
	return [year, month, day]
}
export const hasPassed: hasPassedType = (now, holiday) => {
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

const getNextYearDate = (date: string, currYear: number) => {
	return new Date(date.replace(currYear.toString(), (currYear + 1).toString()))
}
export const formatHoliday: formatHolidayType = (
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

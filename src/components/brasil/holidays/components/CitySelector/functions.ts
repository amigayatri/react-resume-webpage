import BrazilianAPI from "../../../../../api/Brazil"
import { GroupProps, iconKey, OptionProps } from "../../../../../types/common"
import { HolidayProps, StateProps } from "../../../../../types/holidays"
import { getPronouns } from "./components/ChooseCity/pronoum-map"
import { unsetValue } from "./components/constants"

type statesMap = Map<string, StateProps>

const statesMap: statesMap = new Map()
const api = new BrazilianAPI()

const initializeMap = async () => {
	const states = await api.getStates()
	states.sort((a, b) => a.name.localeCompare(b.name))
	for (const state of states) {
		statesMap.set(state.twoLetters, state)
	}
}

const emptyOptions: GroupProps[] = []

let stateOptions = emptyOptions

const optgroupPreffix = "select.optgroup"

type getStateOptions = () => GroupProps[]
const getStateOptions: getStateOptions = () => {
	const options: OptionProps[] = []
	if (statesMap.size === 0) {
		initializeMap().then(() => {
			for (const { twoLetters, name } of statesMap.values()) {
				options.push({ value: twoLetters, key: name })
			}
			stateOptions = [{ groupKey: `${optgroupPreffix}.states`, options }]
		})
		return [{ groupKey: `${optgroupPreffix}.states`, options }]
	}
	return stateOptions
}

type cityOptionsMap = Map<string, GroupProps>
const cityOptionsMap: cityOptionsMap = new Map()

type getStateName = (twoLetters: string) => string
const getStateName: getStateName = (twoLetters) => {
	if (statesMap.size === 0) initializeMap()
	const recoveredInfo = statesMap.get(twoLetters)
	console.log(recoveredInfo, twoLetters, statesMap)
	if (recoveredInfo === undefined) return ""
	return recoveredInfo.name
}

type generateCityOptions = (state: string) => Promise<GroupProps>
const generateCityOptions: generateCityOptions = async (state) => {
	const options: OptionProps[] = []
	const group = await api.getCities(state).then((cities) => {
		cities.sort((a, b) => a.localeCompare(b))
		for (const city of cities) {
			options.push({ value: city, key: city })
		}
		return {
			groupKey: `${optgroupPreffix}.cities.${getPronouns(state)}`,
			tOptionsGroup: {
				stateName: getStateName(state)
			},
			options
		}
	})
	return group
}

type getCityOptions = (state: string) => Promise<GroupProps[]>
const getCityOptions: getCityOptions = async (state) => {
	if (state === unsetValue) return emptyOptions
	const recoveredOptions = cityOptionsMap.get(state)
	if (recoveredOptions === undefined) {
		const newOptions = await generateCityOptions(state)
		cityOptionsMap.set(state, newOptions)
		return [newOptions]
	}
	return [recoveredOptions]
}

type getCurrIcon = (state: string) => iconKey
const getCurrIcon: getCurrIcon = (state) => {
	const recoveredInfo = statesMap.get(state)
	if (recoveredInfo !== undefined) return recoveredInfo.icon
	return "brasil"
}

const brasilIconID: iconKey = "brasil"

interface MunicipalQuantity {
	thisYear: number
	nextYear: number
}

type statePresentMap = Map<string, MunicipalQuantity>

interface NewHolidays {
	thisYear: HolidayProps[]
	nextYear: HolidayProps[]
	qtty: MunicipalQuantity
}
type getNewHolidays = (state: string, city: string) => Promise<NewHolidays>

type initializeNewHolidays = () => NewHolidays
const initializeNewHolidays: initializeNewHolidays = () => {
	return {
		thisYear: [],
		nextYear: [],
		qtty: {
			thisYear: 0,
			nextYear: 0
		}
	}
}

const getNewHolidays: getNewHolidays = async (state, city) => {
	if (state === unsetValue || city === unsetValue) {
		return initializeNewHolidays()
	}
	const newHolidays = await api
		.getMunicipalHolidays(state, city)
		.then((cityHolidays) => {
			const newHolidays = initializeNewHolidays()
			if (cityHolidays !== undefined) {
				const currYear = new Date().getFullYear()
				for (const holiday of cityHolidays) {
					if (holiday.date.getFullYear() === currYear) {
						newHolidays.thisYear.push(holiday)
						newHolidays.qtty.thisYear++
					} else {
						newHolidays.nextYear.push(holiday)
						newHolidays.qtty.nextYear++
					}
				}
			}
			return newHolidays
		})
	return newHolidays
}

export {
	getStateOptions,
	getCurrIcon,
	emptyOptions,
	getCityOptions,
	getNewHolidays,
	brasilIconID
}
export type { statePresentMap, NewHolidays }

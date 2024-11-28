import { GroupProps } from "../../../../../../types/common"
import {
	getAvailableGroups,
	getLocals,
	getLocalSize
} from "../../../../../../icons"

const filterKeys = ["all", "first-letter", "groups", "usage-local", "_"]
type filterKey = (typeof filterKeys)[number]

type isFilterKey = (arg0: any) => arg0 is filterKey
const isFilterKey: isFilterKey = (arg0): arg0 is filterKey =>
	filterKeys.includes(arg0)

const groupKeyPreffix = "select.optgroup"
type createAllOptions = () => {
	all: GroupProps
	group: GroupProps
	letter: GroupProps
	local: GroupProps
}

type createOptions = () => GroupProps
const createAll: createOptions = () => {
	return {
		groupKey: `${groupKeyPreffix}.all`,
		options: [{ key: "options.all", value: "all" }]
	}
}

const createLetter: createOptions = () => {
	const options = []
	const aCode = "a".charCodeAt(0)
	for (let i = 0; i < 26; i++) {
		const char = String.fromCharCode(aCode + i)
		options.push({
			value: char,
			key: "options.letter",
			tOptions: { letterChar: char }
		})
	}
	return {
		groupKey: `${groupKeyPreffix}.letter`,
		options
	}
}

const createGroups: createOptions = () => {
	const options = []
	const iconGroups = getAvailableGroups()
	for (const groupName of iconGroups) {
		options.push({
			key: `options.${groupName}`,
			value: groupName
		})
	}
	return {
		groupKey: `${groupKeyPreffix}.group`,
		options
	}
}

const createLocal: createOptions = () => {
	const options = []
	const allLocals = getLocals()
	for (const localKey of allLocals) {
		const size = getLocalSize(localKey)
		if (size === 0) continue
		const localOption = {
			value: localKey,
			key: "options.local",
			tOptions: { localKey, localSize: size.toString() }
		}
		options.push(localOption)
	}
	return {
		groupKey: `${groupKeyPreffix}.local`,
		options
	}
}

const createAllOptions: createAllOptions = () => {
	return {
		all: createAll(),
		letter: createLetter(),
		local: createLocal(),
		group: createGroups()
	}
}

const allOptions = createAllOptions()

type getOptions = (filter: string) => GroupProps[]
const getOptions: getOptions = (filter) => {
	const { all } = allOptions
	if (isFilterKey(filter)) {
		if (filter === "all") {
			const { group, letter, local } = allOptions
			return [all, group, letter, local]
		} else if (filter === "first-letter") {
			const { letter } = allOptions
			return [all, letter]
		} else if (filter === "groups") {
			const { group } = allOptions
			return [all, group]
		} else if (filter === "usage-local") {
			const { local } = allOptions
			return [all, local]
		}
	}
	return [all]
}

const filters: filterKey[] = ["all", "first-letter", "groups", "usage-local"]

type generateFilterOptions = () => GroupProps[]
const generateFilterOptions: generateFilterOptions = () => {
	const keyPreffix = "filter.select"
	const group: GroupProps = {
		groupKey: `${keyPreffix}.optgroup.filterby`,
		options: []
	}
	for (const filterId of filters) {
		group.options.push({
			key: `${keyPreffix}.options.${filterId}`,
			value: filterId
		})
	}
	return [group]
}

export { generateFilterOptions, getOptions }
import { GroupProps } from "../../../../../../types/common"
import { getAvailableGroups } from "../../../../../../icons"

type generateGroupOptions = () => GroupProps[]

const generateGroupOptions: generateGroupOptions = () => {
	const groupKeyPreffix = "select.optgroup"
	const groupOptions: GroupProps = {
		groupKey: `${groupKeyPreffix}.group`,
		options: []
	}
	const iconGroups = getAvailableGroups()
	for (const groupName of iconGroups) {
		groupOptions.options.push({
			key: `options.${groupName}`,
			value: groupName
		})
	}
	const letterGroup: GroupProps = {
		groupKey: `${groupKeyPreffix}.letter`,
		options: []
	}
	const aCode = "a".charCodeAt(0)
	for (let i = 0; i < 26; i++) {
		const char = String.fromCharCode(aCode + i)
		letterGroup.options.push({
			value: char,
			key: "options.letter",
			tOptions: { letterChar: char }
		})
	}
	const allGroup: GroupProps = {
		groupKey: `${groupKeyPreffix}.all`,
		options: [{ key: "options.all", value: "all" }]
	}
	return [allGroup, groupOptions, letterGroup]
}

export { generateGroupOptions }

import { GroupProps } from "../../../../../../types/common"

const groupKey = "stats.select.optgroup.local"
const optionKey = "stats.select.options.local"

type generateLocalOptions = (localArr: string[]) => GroupProps[]
const generateLocalOptions: generateLocalOptions = (localArr) => {
	const localGroup: GroupProps = {
		groupKey,
		options: []
	}
	for (const localKey of localArr) {
		const localOption = {
			value: localKey,
			key: optionKey,
			tOptions: { localKey }
		}
		localGroup.options.push(localOption)
	}
	return [localGroup]
}

const emptyOptions: GroupProps[] = []

export { generateLocalOptions, emptyOptions }

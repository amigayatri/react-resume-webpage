import { iconKey } from "../types"
import { allIcons } from "./all"

type getIconFn = (id: iconKey) => ((props: any) => JSX.Element) | undefined

const getIcon: getIconFn = (id) => {
	return allIcons.get(id)
}

type iconExists = (id: string) => boolean
const iconExists: iconExists = (id) => {
	return allIcons.has(id as iconKey)
}

const getAllIconsIds = () => {
	return Array.from(allIcons.keys())
}

export { getAllIconsIds, getIcon, iconExists }

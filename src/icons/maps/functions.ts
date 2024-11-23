import { iconKey } from "../types"
import { allIcons } from "./all"
import { markAsUsed } from "./used"
type getIconFn = (
	id: iconKey,
	local: string
) => ((props: any) => JSX.Element) | undefined

const getIcon: getIconFn = (id, local) => {
	markAsUsed(id, local)
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

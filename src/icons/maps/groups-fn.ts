import { iconKey } from "../types"
import { availableGroups, groupsSets } from "./groups"

export const getAvailableGroups = () => {
	return availableGroups
}

type getIconsFromGroup = (group: string) => iconKey[]
export const getIconsFromGroup: getIconsFromGroup = (group) => {
	const groupIcons = groupsSets.get(group)
	if (groupIcons === undefined) return []
	return Array.from(groupIcons)
}

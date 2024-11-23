import { iconKey, groupKey } from "./types"

type iconsMap = Map<groupKey, iconKey>

//$groupIconsStart
const groupIcons: iconsMap = new Map([
	["theme", "website"],
	["rainbow", "rainbow"],
	["famous media", "clapperboard"],
	["brands", "megaphone"],
	["places", "mappin"],
	["tech", "computer"],
	["schemes", "palette"]
])
//$groupIconsEnd

type getGroupIcon = (group: groupKey) => iconKey | undefined
export const getGroupIcon: getGroupIcon = (group) => {
	return groupIcons.get(group)
}

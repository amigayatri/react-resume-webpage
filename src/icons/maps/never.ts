import { neverUsedIconsSet } from "./types"
import { allIcons } from "./all"
import { iconKey } from "../types"

const neverUsedIcons: neverUsedIconsSet = new Set(Array.from(allIcons.keys()))

const removeUsed = (id: iconKey) => {
	neverUsedIcons.delete(id)
}

export { neverUsedIcons, removeUsed }

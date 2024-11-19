import { iconKey } from "../types"
import { usedIconsMap } from "./types"
import { removeUsed } from "./never"
const usedIcons: usedIconsMap = new Map()

type markAsUsed = (id: iconKey, local: string) => void
const markAsUsed: markAsUsed = (id, local) => {
	const prevUsed = usedIcons.get(local) || new Set()
	prevUsed.add(id)
	usedIcons.set(local, prevUsed)
	removeUsed(id)
}

const getAllUsed = () => {
	return Array.from(usedIcons.entries())
}

export { usedIcons, markAsUsed, getAllUsed }

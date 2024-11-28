import { getAllUsed, iconKey } from "../../../../../icons"
import { Stats } from "./types"

const localUsedByIcon: Map<iconKey, Set<string>> = new Map()

const initializeMap = () => {
	const usageEntries = getAllUsed()
	for (const [local, localIcons] of usageEntries) {
		for (const iconId of localIcons) {
			let iconLocalSet = localUsedByIcon.get(iconId)
			if (iconLocalSet === undefined) iconLocalSet = new Set<string>()
			iconLocalSet.add(local)
			localUsedByIcon.set(iconId, iconLocalSet)
		}
	}
}

const statsMemo = new Map<string, Stats>()

type getCurrStats = (currIcons: iconKey[]) => Stats
const getCurrStats: getCurrStats = (currIcons) => {
	if (localUsedByIcon.size === 0) {
		initializeMap()
	}
	const asKey = currIcons.toString()
	const recoveredStats = statsMemo.get(asKey)
	if (recoveredStats !== undefined) return recoveredStats
	const currStats: Stats = {
		total: currIcons.length,
		used: 0,
		usageLocalMap: new Map()
	}
	for (const iconId of currIcons) {
		const usageLocals = localUsedByIcon.get(iconId)
		if (usageLocals !== undefined) {
			for (const local of usageLocals) {
				let localUsed = currStats.usageLocalMap.get(local)
				if (localUsed === undefined) {
					localUsed = new Set<iconKey>()
				}
				localUsed.add(iconId)
				currStats.usageLocalMap.set(local, localUsed)
			}
			currStats.used++
		}
	}
	statsMemo.set(asKey, currStats)
	return currStats
}

export { getCurrStats }

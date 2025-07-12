import { generateOptions } from "../types"

export type contrastId = "no" | "minimum" | "AAbig" | "AAsmall" | "AAAsmall"
export type contrastValue = 1 | 0.6 | 0.3333333333333333 | 0.2222222222222222 | 0.14285714285714285

const filters: Map<contrastId, contrastValue> = new Map([
    ["no", 1],
    ["minimum", 0.6],
    ["AAbig", 0.3333333333333333],
    ["AAsmall", 0.2222222222222222],
    ["AAAsmall", 0.14285714285714285]
])

const filterIds: Map<contrastValue, contrastId> = new Map([
    [1, "no"],
    [0.6, "minimum"],
    [0.3333333333333333, "AAbig"],
    [0.2222222222222222, "AAsmall"],
    [0.14285714285714285, "AAAsmall"]
])

export interface ContrastInfo {
	id: contrastId
	value: contrastValue
}

type getContrastInfo = (info: contrastId | contrastValue) => ContrastInfo
export const getContrastInfo: getContrastInfo = (info) => {
    const partial: Partial<ContrastInfo> = {}
    if (typeof info === "string") {
        partial.id = info
		partial.value = filters.get(info) || 1
    } else {
		partial.value = info
		partial.id = filterIds.get(info) || "no"
	}
	return partial as ContrastInfo
}

export const generateFilterOptions: generateOptions = () => {
	const filterOptions = Array.from(filters.entries()).map(([id, value]) => {
		return { value: value.toString(), key: `filters.${id}` }
	})
	return [{ groupKey: "select.filter", options: filterOptions }]
}

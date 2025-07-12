import { generateOptions } from "../types"

export type divisionType = "single" | "region" | "UF" | "meso" | "micro" | "cities"

const divisionURLMap: Map<divisionType, string> = new Map([
	["cities", "/brazil-map-paths/cities.json"],
	["micro", "/brazil-map-paths/micro.json"],
	["meso", "/brazil-map-paths/meso.json"],
	["UF", "/brazil-map-paths/uf.json"],
	["region", "/brazil-map-paths/region.json"],
	["single", "/brazil-map-paths/single.json"]
])

type getDivisionURL = (arg0: string) => string
export const getDivisionURL: getDivisionURL = (division) => {
	const url = divisionURLMap.get(division as divisionType)
	return url !== undefined ? url : ""
}

export const generateDivisionOptions: generateOptions = () => {
	const divisionOptions = Array.from(divisionURLMap.keys())
		.reverse()
		.map((value) => {
			return { value: value, key: `divisions.${value}` }
		})
	return [
		{
			groupKey: "select.division",
			options: divisionOptions
		}
	]
}
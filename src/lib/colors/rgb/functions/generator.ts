import { getRGBFromHex, divideColor, getDiffColors, RGB } from "../"

interface GeneratorInfo {
	start: RGB
	diff: RGB
}

type getGeneratorInfo = (
	startHex: string,
	endHex: string,
	steps: number
) => GeneratorInfo

type getStartAndEnd = (start: string, end: string) => RGB[]
const getStartAndEnd: getStartAndEnd = (start, end) => [
	getRGBFromHex(start),
	getRGBFromHex(end)
]

export const getGeneratorInfo: getGeneratorInfo = (startHex, endHex, steps) => {
	const [start, end] = getStartAndEnd(startHex, endHex)
	const diff = divideColor(getDiffColors(end, start), steps)
	return {
		start,
		diff
	}
}

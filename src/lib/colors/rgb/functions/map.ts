import { RGB, mapFN } from "../types"

type mapRGB = (base: RGB, mapFN: mapFN, idx: number | boolean) => RGB
export const mapRGB: mapRGB = (base, mapFN, idx) => {
	const newRGB: Partial<RGB> = {}
	if (typeof idx === "boolean") {
		Object.entries(base).forEach(
			([key]) => (newRGB[key as keyof RGB] = mapFN(key as keyof RGB, 1))
		)
	} else {
		Object.entries(base).forEach(
			([key]) => (newRGB[key as keyof RGB] = mapFN(key as keyof RGB, idx))
		)
	}
	return newRGB as RGB
}

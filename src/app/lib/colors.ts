export let variationSteps = 4

import {
	RGB,
	SimpleColor,
	getInverse,
	getRGBFromHex,
	shadeGenerator
} from "./rgb"
import { getComplementaryColor } from "./hsl"
interface Palette {
	complementary: string
	inverse: string
}

const targets = new Map([["#FFFFFF", "#000000"]])
export class Color {
	code: string
	variations: Map<string, Map<string, SimpleColor>> = new Map()
	palette: Palette = { complementary: "", inverse: "" }
	#rgb: RGB

	constructor(code: string) {
		this.code = code.toUpperCase()
		this.#rgb = getRGBFromHex(code)
		this.palette.inverse = getInverse(this.#rgb)
		this.palette.complementary = getComplementaryColor(this.#rgb)
		this.#generateShadeCodes()
	}

	#generateVariations = (
		start: string,
		end: string,
		map: Map<string, SimpleColor>
	) => {
		const sg = shadeGenerator(start, end, variationSteps)
		for (let i = 0; i <= variationSteps; i++) {
			const newColor: SimpleColor = sg.get(i)
			map.set(newColor.code, newColor)
		}
		return map
	}

	#generateShadeCodes = () => {
		for (const [from, to] of targets.entries()) {
			let fromVariations: Map<string, SimpleColor> = new Map()
			fromVariations = this.#generateVariations(from, this.code, fromVariations)
			fromVariations = this.#generateVariations(this.code, to, fromVariations)
			fromVariations.set(to, { code: to, inverse: from })
			this.variations.set(from, fromVariations)
		}
	}

	regenerateVariations = () => {
		this.variations.clear()
		this.#generateShadeCodes()
	}
}

export const regex = new RegExp(/^#([A-Fa-f0-9]{6})$/)

export const getTargets = () => {
	return Array.from(targets.entries())
}

export const addTarget = (newTarget: string) => {
	const { palette } = new Color(newTarget)
	targets.set(newTarget.toUpperCase(), palette.inverse)
}

export const removeTarget = (key: string) => {
	targets.delete(key.toUpperCase())
}

export const changeSteps = (newSteps: number) => {
	variationSteps = newSteps
}

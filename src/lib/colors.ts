export let variationSteps = 4
import {
	ColorClass,
	SimpleColor,
	RGB,
	ColorPalette,
	variationsType,
	generateVariationsType
} from "../types/colors"

import { getInverse, getRGBFromHex, shadeGenerator } from "./rgb"

import { getComplementaryColor } from "./hsl"

const targets = new Map([["#FFFFFF", "#000000"]])

export class Color implements ColorClass {
	code: string
	variations: variationsType = new Map()
	palette: ColorPalette = { complementary: "", inverse: "" }
	#rgb: RGB

	constructor(code: string) {
		this.code = code.toUpperCase()
		this.#rgb = getRGBFromHex(code)
		this.palette.inverse = getInverse(this.#rgb)
		this.palette.complementary = getComplementaryColor(this.#rgb)
		this.#generateShadeCodes()
	}

	#generateVariations: generateVariationsType = (start, end, map) => {
		const sg = shadeGenerator(start, end, variationSteps)
		for (let i = 0; i <= variationSteps; i++) {
			const newColor: SimpleColor = sg.get(i)
			map.set(newColor.code, newColor)
		}
		return map
	}

	#generateShadeCodes: () => void = () => {
		for (const [from, to] of targets.entries()) {
			let fromVariations: Map<string, SimpleColor> = new Map()
			fromVariations = this.#generateVariations(from, this.code, fromVariations)
			fromVariations = this.#generateVariations(this.code, to, fromVariations)
			fromVariations.set(to, { code: to, inverse: from })
			this.variations.set(from, fromVariations)
		}
	}

	regenerateVariations: () => void = () => {
		this.variations.clear()
		this.#generateShadeCodes()
	}
}

export const regex = new RegExp(/^#([A-Fa-f0-9]{6})$/)

export const getTargets = () => {
	return Array.from(targets.entries())
}

export const addTarget: (newTarget: string) => void = (newTarget) => {
	const { palette } = new Color(newTarget)
	targets.set(newTarget.toUpperCase(), palette.inverse)
}

export const removeTarget: (key: string) => void = (key) => {
	targets.delete(key.toUpperCase())
}

export const changeSteps: (newSteps: number) => void = (newSteps) => {
	variationSteps = newSteps
}

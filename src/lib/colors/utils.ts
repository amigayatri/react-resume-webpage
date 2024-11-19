type math = (num: number, multiplier?: number) => number
export const floor: math = (num, multiplier) =>
	multiplier === undefined ? Math.floor(num) : Math.floor(num * multiplier)
export const round: math = (num, multiplier) =>
	multiplier === undefined ? Math.round(num) : Math.round(num * multiplier)

const regexHex = new RegExp(/^#([A-Fa-f0-9]{6})$/)
type isHex = (str: string) => boolean
export const isHex: isHex = (code) => regexHex.test(code)

import { mapRGB, getGeneratorInfo } from "./rgb/functions"
import { luminosityChange, getHSLFromHex, getHexFromHSL } from "./hsl/"
import { canUseColor } from "./relations"
import { createSimple, createSimpleFromRGB } from "./simple"
export {
	mapRGB,
	createSimple,
	getGeneratorInfo,
	createSimpleFromRGB,
	getHSLFromHex,
	getHexFromHSL,
	canUseColor,
	luminosityChange
}

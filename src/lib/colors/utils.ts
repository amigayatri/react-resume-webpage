type round = (num: number, multiplier?: number) => number
export const round: round = (num, multiplier) =>
	multiplier === undefined ? Math.round(num) : Math.round(num * multiplier)

const regexHex = new RegExp(/^#([A-Fa-f0-9]{6})$/)
type isHex = (str: string) => boolean
export const isHex: isHex = (code) => regexHex.test(code)

import { mapRGB, getGeneratorInfo } from "./rgb/functions"
import { createSimple, createSimpleFromRGB } from "./simple"
export { mapRGB, createSimple, getGeneratorInfo, createSimpleFromRGB }

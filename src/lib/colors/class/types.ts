import { HSL, SimpleColor } from "../types"
import { RGB, mapFN } from "../rgb"
export type { RGB, HSL, SimpleColor, mapFN }

export interface ColorPalette {
	complementary: string
	inverse: string
}
export type target = string
export type targetPair = [target, target]
export type targetVariations = Map<target, SimpleColor>
export type variations = Map<target, targetVariations>

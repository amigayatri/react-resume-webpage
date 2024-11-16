import { SimpleColor } from "../types"
import { RGB } from "../rgb"
export type { SimpleColor, RGB }

/**
 * 	HSL: {
 * 		hue: 0 to 360
		saturation: 0 to 100
		luminosity: 0 to 100
 * 	}
 */
export interface HSL {
	hue: number
	saturation: number
	luminosity: number
}

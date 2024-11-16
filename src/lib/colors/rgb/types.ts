export type mapFN = (key: keyof RGB, _mapIdx: number) => number

/**
 * 	RGB: {
 * 		red: 0 to 255
		green: 0 to 255
		blue: 0 to 255
 * 	}
 */
export interface RGB {
	red: number
	green: number
	blue: number
}

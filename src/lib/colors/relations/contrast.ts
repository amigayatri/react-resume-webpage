import { getRGBFromHex } from "../rgb"

type luminance = (color: string) => number
const luminance: luminance = (color) => {
	const { red, green, blue } = getRGBFromHex(color)
	var a = [red, green, blue].map(function (v) {
		v /= 255
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
	})
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

type checkContrast = (color1: string, color2: string) => number
const checkContrast: checkContrast = (color1, color2) => {
	const color1luminance = luminance(color1),
		color2luminance = luminance(color2)
	const ratio =
		color1luminance > color2luminance
			? (color2luminance + 0.05) / (color1luminance + 0.05)
			: (color1luminance + 0.05) / (color2luminance + 0.05)
	return ratio
}

type paletteColors = Array<string>
type getCleanColors = (background: string, limit: number) => paletteColors

interface ContrastCheckerClass {
	rawColors: paletteColors
	getCleanColors: getCleanColors
}

export class ContrastChecker implements ContrastCheckerClass {
	rawColors
	constructor(colors: paletteColors) {
		this.rawColors = colors
	}
	getCleanColors: getCleanColors = (bg, limit) => {
		const clean: paletteColors = []
		for (const color of this.rawColors) {
			if (checkContrast(color, bg) <= limit) clean.push(color)
		}
		return clean
	}
}

const minContrast = 1 / 4.5
type canUseColor = (color: string, bg: string) => boolean
export const canUseColor: canUseColor = (color, bg) => {
	return checkContrast(color, bg) <= minContrast
}
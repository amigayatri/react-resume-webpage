import {
	SimpleColor,
	RGB,
	getRGBFromHexType,
	generateHexType,
	mapRGBType,
	getDiffColorsType,
	divideType,
	getInverseType,
	shadeGeneratorType,
	luminanceType,
	checkContrastType,
	sortColorsType
} from "../types/colors"
const hexToInt: (color: string) => number = (color) => parseInt(color, 16)

export const getRGBFromHex: getRGBFromHexType = (hexaCode) => {
	const hArr = hexaCode.split("")
	const red = hexToInt(hArr[1] + hArr[2])
	const green = hexToInt(hArr[3] + hArr[4])
	const blue = hexToInt(hArr[5] + hArr[6])
	return { red, green, blue }
}
const intToHex: (color: number) => string = (color: number) =>
	color < 16 ? "0" + color.toString(16) : color.toString(16)

export const generateHex: generateHexType = (color) => {
	const hex = [
		"#",
		intToHex(color.red),
		intToHex(color.green),
		intToHex(color.blue)
	]
	return hex.join("").toUpperCase()
}

const mapRGB: mapRGBType = (base, mapFN, idx) => {
	const newRGB: Partial<RGB> = {}
	if (typeof idx == "boolean") {
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

export const getDiffColors: getDiffColorsType = (firstColor, secondColor) => {
	return {
		red: firstColor.red - secondColor.red,
		green: firstColor.green - secondColor.green,
		blue: firstColor.blue - secondColor.blue
	} as RGB
}

const divide: divideType = (color, steps) => {
	const divideKey = (key: keyof RGB, _idx: number) => {
		return Math.trunc(color[key] / steps)
	}
	return mapRGB(color, divideKey, false)
}

export const getInverse: getInverseType = (color) => {
	const maxVal = 255
	const invertKey = (key: keyof RGB, _idx: number) => {
		return maxVal - color[key]
	}
	const inverseRGB = mapRGB(color, invertKey, false)
	return generateHex(inverseRGB)
}

export const shadeGenerator: shadeGeneratorType = (startHex, endHex, steps) => {
	const start = getRGBFromHex(startHex),
		end = getRGBFromHex(endHex)
	const diff = getDiffColors(end, start)
	const stepDiff = divide(diff, steps)
	const getNew = (key: keyof RGB, i: number) => {
		const keyDiff = i * stepDiff[key]
		return start[key] + keyDiff
	}
	return {
		get: (i: number) => {
			const newColor = mapRGB(start, getNew, i)
			return {
				code: generateHex(newColor),
				inverse: getInverse(newColor)
			} as SimpleColor
		}
	}
}
const luminance: luminanceType = ({ red, green, blue }) => {
	var a = [red, green, blue].map(function (v) {
		v /= 255
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
	})
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

export const checkContrast: checkContrastType = (color1, color2) => {
	const color1luminance = luminance(getRGBFromHex(color1)),
		color2luminance = luminance(getRGBFromHex(color2))
	const ratio =
		color1luminance > color2luminance
			? (color2luminance + 0.05) / (color1luminance + 0.05)
			: (color1luminance + 0.05) / (color2luminance + 0.05)
	return ratio
}

export const sortColors: sortColorsType = (colors) => {
	const averageColor = (color: RGB) => {
		const { red, green, blue } = color
		return (red + green + blue) / 3
	}
	const compareColors = (color1hex: string, color2hex: string) => {
		const average1 = averageColor(getRGBFromHex(color1hex))
		const average2 = averageColor(getRGBFromHex(color2hex))
		return average1 - average2
	}
	return Array.from(colors).sort(compareColors)
}

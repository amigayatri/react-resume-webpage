export interface RGB {
	red: number
	green: number
	blue: number
}
export interface SimpleColor {
	code: string
	inverse: string
}

export const getRGBFromHex = (hexaCode: string) => {
	const hexToInt = (color: string) => parseInt(color, 16)
	const hArr = hexaCode.split("")
	const red = hexToInt(hArr[1] + hArr[2])
	const green = hexToInt(hArr[3] + hArr[4])
	const blue = hexToInt(hArr[5] + hArr[6])
	return { red, green, blue }
}

export const generateHex = (color: RGB) => {
	const intToHex = (color: number) =>
		color < 16 ? "0" + color.toString(16) : color.toString(16)
	const hex = [
		"#",
		intToHex(color.red),
		intToHex(color.green),
		intToHex(color.blue)
	]
	return hex.join("").toUpperCase()
}

const mapRGB = (
	base: RGB,
	mapFN: (key: keyof RGB, _mapIdx: number) => number,
	idx: number | boolean
) => {
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

export const getDiffColors = (firstColor: RGB, secondColor: RGB) => {
	return {
		red: firstColor.red - secondColor.red,
		green: firstColor.green - secondColor.green,
		blue: firstColor.blue - secondColor.blue
	} as RGB
}

const divide = (color: RGB, steps: number) => {
	const divideKey = (key: keyof RGB, _idx: number) => {
		return Math.trunc(color[key] / steps)
	}
	return mapRGB(color, divideKey, false)
}

export const getInverse = (color: RGB) => {
	const maxVal = 255
	const invertKey = (key: keyof RGB, _idx: number) => {
		return maxVal - color[key]
	}
	const inverseRGB = mapRGB(color, invertKey, false)
	return generateHex(inverseRGB)
}

export const shadeGenerator = (
	startHex: string,
	endHex: string,
	steps: number
) => {
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

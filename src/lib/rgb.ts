export interface RGB {
	red: number
	green: number
	blue: number
}

export const Black = {
	red: 0,
	green: 0,
	blue: 0
}

export const White = {
	red: 255,
	green: 255,
	blue: 255
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

export const mapRGB = (
	base: RGB,
	mapFN: (key: keyof RGB, idx: number) => number,
	idx: number
) => {
	const newRGB: Partial<RGB> = {}
	Object.entries(base).forEach(
		([key]) => (newRGB[key as keyof RGB] = mapFN(key as keyof RGB, idx))
	)
	return newRGB as RGB
}

export const getDiffColors = (firstColor: RGB, secondColor: RGB) => {
	return {
		red: firstColor.red - secondColor.red,
		green: firstColor.green - secondColor.green,
		blue: firstColor.blue - secondColor.blue
	} as RGB
}

export const getInverse = (color: RGB) => {
	const maxVal = 255
	return {
		red: maxVal - color.red,
		green: maxVal - color.green,
		blue: maxVal - color.blue
	} as RGB
}

export interface RGB {
	red: number
	green: number
	blue: number
}
export interface SimpleColor {
	code: string
	inverse: string
}
export interface HSL {
	hue: number
	saturation: number
	luminosity: number
}
export interface ColorPalette {
	complementary: string
	inverse: string
}

export type getHueRegionType = (color: RGB) => string
export type calculateHSLType = (color: RGB) => HSL
export type getRGBfromHSLType = (color: HSL) => RGB
export type getComplementaryColorType = (color: RGB) => string
export type targetVariationsType = Map<string, SimpleColor>
export type variationsType = Map<string, targetVariationsType>
export type generateVariationsType = (
	start: string,
	end: string,
	map: Map<string, SimpleColor>
) => Map<string, SimpleColor>

export interface ColorClass {
	code: string
	variations: variationsType
	palette: ColorPalette
	regenerateVariations: () => void
}

export type getRGBFromHexType = (hexaCode: string) => RGB

export type generateHexType = (color: RGB) => string
export type mapRGBType = (
	base: RGB,
	mapFN: (key: keyof RGB, _mapIdx: number) => number,
	idx: number | boolean
) => RGB

export type getDiffColorsType = (firstColor: RGB, secondColor: RGB) => RGB
export type divideType = (color: RGB, steps: number) => RGB
export type getInverseType = (color: RGB) => string
export type shadeGeneratorType = (
	startHex: string,
	endHex: string,
	steps: number
) => { get: (i: number) => SimpleColor }
export type luminanceType = (color: RGB) => number
export type checkContrastType = (color1: string, color2: string) => number
export type sortColorsType = (colors: string[]) => string[]

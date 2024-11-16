import { HSL } from "../types"

type getComplementaryHSL = (color: HSL) => HSL
export const getComplementaryHSL: getComplementaryHSL = ({
	hue,
	saturation,
	luminosity
}) => {
	const newHue = (hue + 180) % 360
	return {
		hue: newHue,
		saturation,
		luminosity
	}
}

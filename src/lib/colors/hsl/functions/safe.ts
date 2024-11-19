import { canUseColor, luminosityChange } from "../../utils"
import { getHSLFromHex, getHexFromHSL } from "../"

type getFirstSafe = (color: string, bg: string, isToAdd?: boolean) => string
const getFirstSafe: getFirstSafe = (colorStr, bg, isToAdd) => {
	const color = getHSLFromHex(colorStr)
	const newLum = 100 - color.luminosity
	let newHSL = luminosityChange(color, newLum)
	if (isToAdd === true) {
		for (let l = newLum; l <= 100; l++) {
			if (canUseColor(getHexFromHSL(newHSL), bg)) break
			newHSL = luminosityChange(color, l)
		}
	} else {
		for (let l = newLum; l >= 0; l--) {
			if (canUseColor(getHexFromHSL(newHSL), bg)) break
			newHSL = luminosityChange(color, l)
		}
	}
	return getHexFromHSL(newHSL)
}
export { getFirstSafe }

import { AccentPair } from "../../../../types/colors"
import { canUseColor, getFirstSafe, isHex } from "../.."
import { getSafePaletteColors } from "../../../palettes"

type createSafeAccentPair = (accent: string) => AccentPair
const createSafeAccentPair: createSafeAccentPair = (accent) => {
	if (!isHex(accent)) {
		const [pink, blue] = getSafePaletteColors("theme", "accent")
		return {
			light: pink,
			dark: blue
		}
	}
	const [black, white] = getSafePaletteColors("theme", "backgrounds")
	const darkSafe = canUseColor(accent, black)
	const lightSafe = canUseColor(accent, white)
	if (darkSafe && lightSafe) {
		return {
			dark: accent,
			light: accent
		}
	} else {
		if (darkSafe) {
			return {
				dark: accent,
				light: getFirstSafe(accent, white)
			}
		} else if (lightSafe) {
			return {
				dark: getFirstSafe(accent, black),
				light: accent
			}
		} else {
			return {
				dark: getFirstSafe(accent, black),
				light: getFirstSafe(accent, white)
			}
		}
	}
}

export { createSafeAccentPair }

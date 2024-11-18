import { ColorPalette, variations } from "./types"
import { createPalette, getVariations, isHex, Controller } from "./functions"

const controller = new Controller()

interface ColorClass {
	code: string
	variations: variations
	palette: ColorPalette
	regenerateVariations: () => void
}
class Color implements ColorClass {
	code
	variations
	palette

	constructor(code: string) {
		this.code = code.toUpperCase()
		this.palette = createPalette(code)
		this.variations = getVariations(code)
	}

	regenerateVariations = () => {
		this.variations = getVariations(this.code)
	}
}

export type ColorType = Color
type createColor = (code: string) => ColorType | false
export const createColor: createColor = (code) => {
	if (!isHex(code)) return false
	return new Color(code)
}
type StepsInfo = [number, boolean]

type create = (code: string) => ColorType
const create: create = (code) =>
	!isHex(code) ? new Color("#000000") : new Color(code)

type createSafeColor = (code: string, newInfo?: StepsInfo) => ColorType
export const createSafeColor: createSafeColor = (code, newInfo) => {
	if (newInfo !== undefined) {
		const prevSteps = controller.steps.get()
		const [newSteps, shouldGoBack] = newInfo
		controller.steps.set(newSteps)
		const newColor = create(code)
		if (shouldGoBack) {
			controller.steps.set(prevSteps)
		}
		return newColor
	}
	return create(code)
}
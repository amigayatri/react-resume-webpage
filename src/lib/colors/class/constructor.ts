import { ColorPalette, variations } from "./types"
import { createPalette, getVariations } from "./functions"

interface ColorClass {
	code: string
	variations: variations
	palette: ColorPalette
	regenerateVariations: () => void
}

export class Color implements ColorClass {
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

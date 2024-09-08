export let variationSteps = 10

import { RGB, SimpleColor, getInverse, getRGBFromHex, shadeGenerator } from "./rgb"
import { getComplementaryColor } from "./hsl"
interface Palette {
    complementary : string;
    inverse : string;
}

const BLACK = '#000000', WHITE = '#FFFFFF'
export class Color {
    code: string
    variations: Map<string, SimpleColor> = new Map()
    palette: Palette = {complementary: '', inverse: ''}
    #rgb: RGB
    
    constructor(code: string) {
        this.code = code.toUpperCase()
        this.#rgb = getRGBFromHex(code)
        this.palette.inverse = getInverse(this.#rgb)
        this.palette.complementary = getComplementaryColor(this.#rgb)
        this.#generateShadeCodes()
    }

    #generateVariations = (start: string, end: string) => {
        const sg = shadeGenerator(start, end, variationSteps)
        for (let i = 0; i <= variationSteps; i++) {
            const newColor : SimpleColor = sg.get(i)
            this.variations.set(newColor.code, newColor)
        }
    }

    #generateShadeCodes = () => {
        this.#generateVariations(WHITE, this.code)
        this.#generateVariations(this.code, BLACK)
    }

    regenerateVariations = () => {
        this.variations.clear()
        this.#generateShadeCodes()
    }
}

export const regex = new RegExp(/^#([A-Fa-f0-9]{6})$/);

export const changeSteps = (newSteps: number) => {
    variationSteps = newSteps
}
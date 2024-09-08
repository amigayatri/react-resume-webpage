export let variationSteps = 10

import { RGB, getInverse, getRGBFromHex, generateHex, getDiffColors, Black, White, mapRGB } from "./rgb"
import { getComplementaryColor } from "./hsl"
interface Palette {
    complementary ?: RGB;
    inverse ?: RGB;
}

interface SimpleColor {
    code: string;
    inverse: string;
}
export class Color {
    code: string
    variations: Set<SimpleColor>
    palette: Palette = {}
    #rgb: RGB
    
    constructor(code: string) {
        this.code = code.toUpperCase()
        this.variations = new Set()
        this.#rgb = getRGBFromHex(code)
        this.palette = this.#generatePalette()
        this.#generateShadeCodes()
    }

    #generateVariations = (diff: RGB, start: RGB) => {
        const getNew = (key: keyof RGB, idx: number) => {
            const keyDiff = diff[key]/variationSteps
            const idxDiff = Math.trunc(idx*keyDiff)
            return start[key] + idxDiff
        }
        for (let i = 0; i <= variationSteps; i++) {
            const newColor : RGB = mapRGB(this.#rgb, getNew, i)
            const simple : SimpleColor = {
                code: generateHex(newColor),
                inverse: generateHex(getInverse(newColor))
            }
            this.variations.add(simple)
        }
    }

    #generateShadeCodes = () => {
        const valueDiff = getDiffColors(this.#rgb, White)
        this.#generateVariations(valueDiff, White)
        const saturationDiff = getDiffColors(Black, this.#rgb)
        this.#generateVariations(saturationDiff, this.#rgb)
    }

    #generatePalette = () => {
        return {
            complementary: getComplementaryColor(this.#rgb),
            inverse: getInverse(this.#rgb)
        } as Palette
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
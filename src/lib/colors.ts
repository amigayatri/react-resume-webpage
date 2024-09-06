export let variationSteps = 10

interface RGB {
    red: number;
    green: number;
    blue: number;
}

interface mapFNType {
    args: {key: keyof RGB, value: number, idx: number};
    fn: (key: keyof RGB, value: number, idx: number) => number;
}

const min = 0, max = 255
export class Color {
    code: string
    variations: Set<string>
    #rgb: RGB 
    constructor(code: string) {
        this.code = code.substring(1).toUpperCase()
        this.variations = new Set()
        this.#rgb = this.#convertFromHexCode(code)
        this.#generateShadeCodes()
    }

    #convertFromHexCode (hexaCode: string) {
        const hexToInt = (color: string) => parseInt(color, 16)
        const hArr = hexaCode.split('')
        const red = hexToInt(hArr[1]+hArr[2])
        const green = hexToInt(hArr[3]+hArr[4])
        const blue = hexToInt(hArr[5]+hArr[6])
        return {red, green, blue}
    }

    #generateHex = (color: RGB) => {
        const intToHex = (color: number) => color < 16 ? '0' + color.toString(16) : color.toString(16)
        const hex = [
            '#', 
            intToHex(color.red), 
            intToHex(color.green), 
            intToHex(color.blue)
        ]
        return hex.join('')
    }

    #mapRGB = (mapFN : mapFNType['fn'], idx?: number) => {
        const newRGB : Partial<RGB> = {}
        Object.entries(this.#rgb).forEach(
            ([key, value]) => newRGB[key as keyof RGB] = mapFN(key as keyof RGB, value, idx == undefined ? -1 : idx)
        )
        return newRGB as RGB
    }

    #generateVariations = (fnDiff: mapFNType['fn'], startVal?: number) => {
        const diff : RGB = this.#mapRGB(fnDiff)
        const getNew: mapFNType['fn'] = (key: keyof RGB, _value : number, idx: number) => {
            const idxDiff = Math.trunc(idx*diff[key])
            if (startVal !== undefined) return startVal + idxDiff
            return this.#rgb[key] + idxDiff
        }
        for (let i = 0; i <= variationSteps; i++) {
            const newColor : RGB = this.#mapRGB(getNew, i)
            const hex = this.#generateHex(newColor).toUpperCase()
            this.variations.add(hex)
        }
    }

    #generateShadeCodes = () => {
        const valueDiff = (_key : keyof RGB, value: number) => (value-min)/variationSteps
        this.#generateVariations(valueDiff, min)
        const saturationDiff = (_key: keyof RGB, value: number) => (max-value)/variationSteps
        this.#generateVariations(saturationDiff)
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
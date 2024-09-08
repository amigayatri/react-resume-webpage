import { RGB } from "./rgb";

interface HSL {
    hue: number;
    saturation: number;
    luminosity: number;
}

const getHueRegion = (color: RGB) => {
    const r = color.red/255
    const g = color.green/255
    const b = color.blue/255
    if (r == g && g == b) return 'gray'
    if (r >= g && g >= b) return 'orange'
    if (g > r && r >= b) return 'chartreuse'
    if (g >= b && b > r) return 'springGreen'
    if (b > g && g > r) return 'azure'
    if (b > r && r >= g) return 'violet'
    //if (r >= b && b >= g) 
    return 'rose'
}

const calculateHSL = (color: RGB) => {
    const hsl: Partial<HSL> = {}
    const max = Math.max(color.red, color.green, color.blue)/255
    const min = Math.min(color.red, color.green, color.blue)/255
    const getHue = (hueRegion: string) => {
        const r = color.red/255
        const g = color.green/255
        const b = color.blue/255
        if (hueRegion == 'orange') {
            return 60*((g-b)/(r-b))
        }
        if (hueRegion == 'chartreuse') {
            return 60*(2-((r-b)/(g-b)))
        }
        if (hueRegion == 'springGreen') {
            return 60*(2+((b-r)/(g-r)))
        }
        if (hueRegion == 'azure') {
            return 60*(4-((g-r)/(b-r)))
        }
        if (hueRegion == 'violet') {
            return 60*(4+((r-g)/(b-g)))
        }
        if (hueRegion == 'rose') {
            return 60*(6-((b-g)/(r-g)))
        }
        return 0
    }
    const getLuminosity = () => {
        const add = min+max
        return 0.5*add
    }
    const getSaturation = ( luminosity: number) => {
        if (luminosity == 0) return 0
        if (luminosity == 1) return 1
        const diff = max-min, add = min+max
        if (luminosity <= 0.5) return diff/add
        return diff/(2-add)
    }
    hsl.hue = Math.round(getHue(getHueRegion(color)))
    const lum = getLuminosity()
    hsl.luminosity = Math.round(lum*100)
    hsl.saturation = Math.round(getSaturation(lum)*100)
    return hsl as HSL
}

const getRGBfromHSL = (color: HSL) => {
    const a = color.saturation*Math.min(color.luminosity, 1-color.luminosity)
    const f = (n: number, k = (n+color.hue/30)%12) => {
        return color.luminosity-a*Math.max(Math.min(k-3, 9-k, 1), -1)
    }
    const newRGB: Partial<RGB> = {}
    newRGB.red = f(0), newRGB.green = f(4), newRGB.blue = f(8)
    return newRGB as RGB
}

export const getComplementaryColor = (color: RGB) => {
    const hsl = calculateHSL(color)
    const complementaryHSL: HSL = {
        hue: (hsl.hue + 180) % 360,
        saturation: hsl.saturation,
        luminosity: hsl.luminosity
    }
    return getRGBfromHSL(complementaryHSL)
}
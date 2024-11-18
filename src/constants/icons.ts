import { icons } from "../components/common/SVGIcon/constants"

type compareKey = (a: string, b:string) => number
const compareKeys: compareKeys = (a, b) => a.localeCompare(b)

export const iconsIds = Array.from(icons.keys()).sort(compareKeys)

import { getAllIconsIds } from "../icons/"
import { iconKey } from "../icons/types"

type compareKeys = (a: iconKey, b: iconKey) => number
const compareKeys: compareKeys = (a, b) => a.localeCompare(b)

export const iconsIds = getAllIconsIds().sort(compareKeys)

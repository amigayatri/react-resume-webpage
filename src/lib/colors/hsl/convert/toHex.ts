import { getHexFromRGB, getRGBfromHSL } from "../../convert"
import { HSL } from "../types"

type getHexFromHSL = (color: HSL) => string
export const getHexFromHSL: getHexFromHSL = (color) =>
	getHexFromRGB(getRGBfromHSL(color))

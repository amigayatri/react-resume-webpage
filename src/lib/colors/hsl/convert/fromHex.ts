import { getRGBFromHex, getHSLfromRGB } from "../../convert"
import { HSL } from "../types"

type getHSLFromHex = (color: string) => HSL
export const getHSLFromHex: getHSLFromHex = (color) =>
	getHSLfromRGB(getRGBFromHex(color))

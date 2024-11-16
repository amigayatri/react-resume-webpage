import { RGB } from "../types"

type getDiffComp = (color1: RGB, color2: RGB, key: keyof RGB) => number
const getDiffComp: getDiffComp = (color1, color2, key) =>
	color1[key] - color2[key]

type getDiffColors = (color1: RGB, color2: RGB) => RGB
export const getDiffColors: getDiffColors = (color1, color2) => {
	return {
		red: getDiffComp(color1, color2, "red"),
		green: getDiffComp(color1, color2, "green"),
		blue: getDiffComp(color1, color2, "blue")
	}
}

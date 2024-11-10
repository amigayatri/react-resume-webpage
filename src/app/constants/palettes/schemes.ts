import Palette from "../../types/PaletteProps"
import PaletteGroup from "../../types/PaletteGroupProps"

export const cmyk: Palette = {
	icon: "colorfilter",
	colors: ["#00ffff", "#ff00ff", "#ffff00", "#000000"]
}
export const rgb: Palette = {
	icon: "colorfilter",
	colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFFFF"]
}
export const mac16: Palette = {
	icon: "terminal",
	colors: [
		"#FFFFFF",
		"#fcf404",
		"#ff6404",
		"#dc0808",
		"#f00884",
		"#4800a4",
		"#0000d4",
		"#00ace8",
		"#20b814",
		"#006410",
		"#582c04",
		"#907038",
		"#c0c0c0",
		"#808080",
		"#404040",
		"#000000"
	]
}
export const riscOS16: Palette = {
	icon: "terminal",
	colors: [
		"#FFFFFF",
		"#dddddd",
		"#bdbdbd",
		"#999999",
		"#797979",
		"#535353",
		"#313131",
		"#000000",
		"#004299",
		"#f0f000",
		"#00cd00",
		"#dd0000",
		"#f0f0bd",
		"#538900",
		"#ffbd00",
		"#00bdff"
	]
}
export const webBasics: Palette = {
	icon: "website",
	colors: [
		"#FFFFFF",
		"#C0C0C0",
		"#808080",
		"#000000",
		"#FF0000",
		"#800000",
		"#FFFF00",
		"#808000",
		"#00FF00",
		"#008000",
		"#00FFFF",
		"#008080",
		"#0000FF",
		"#000080",
		"#FF00FF",
		"#800080"
	]
}
export const rgb12: Palette = {
	icon: "palette",
	colors: [
		"#ff007f",
		"#ff00ff",
		"#7f00ff",
		"#0000ff",
		"#007fff",
		"#00FFFF",
		"#00ff7f",
		"#00ff00",
		"#7fff00",
		"#ffff00",
		"#ff7f00",
		"#FF0000"
	]
}
export const rgb8: Palette = {
	icon: "palette",
	colors: [
		"#ff00ff",
		"#0000ff",
		"#00FFFF",
		"#00ff00",
		"#ffff00",
		"#FF0000",
		"#FFFFFF",
		"#000000"
	]
}
export const grayscale16: Palette = {
	icon: "shadow",
	colors: [
		"#000000",
		"#111111",
		"#222222",
		"#333333",
		"#444444",
		"#555555",
		"#666666",
		"#777777",
		"#888888",
		"#999999",
		"#AAAAAA",
		"#BBBBBB",
		"#CCCCCC",
		"#DDDDDD",
		"#EEEEEE",
		"#FFFFFF"
	]
}
export const crayola10: Palette = {
	icon: "pencil",
	colors: [
		"#D92121",
		"#F2BA49",
		"#FAFA37",
		"#D9E650",
		"#5E8C31",
		"#30BFBF",
		"#47ABCC",
		"#ACACE6",
		"#733380",
		"#A63A79"
	]
}
export const crayola12: Palette = {
	icon: "pencil",
	colors: [
		"#ED0A3F",
		"#FF3F34",
		"#FF8833",
		"#FFAE42",
		"#FFFF00",
		"#9ACD32",
		"#01A368",
		"#0D98BA",
		"#0066FF",
		"#8A2BE2",
		"#7F00FF",
		"#C71585"
	]
}
export const munsellCrayola: Palette = {
	icon: "pencil",
	colors: [
		"#D92121",
		"#E58E73",
		"#ECB176",
		"#F2BA49",
		"#FFEB00",
		"#FAFA37",
		"#D9E650",
		"#ACBF60",
		"#5E8C31",
		"#4D8C57",
		"#8DD9CC",
		"#30BFBF",
		"#7ED4E6",
		"#47ABCC",
		"#ACACE6",
		"#8B72BE",
		"#733380",
		"#D982B5",
		"#A63A79",
		"#A55353",
		"#8B8680",
		"#000000"
	]
}
export const vhs: Palette = {
	icon: "vhs",
	colors: [
		"#686868",
		"#b4b4b4",
		"#b4b410",
		"#10b4b4",
		"#10b410",
		"#b410b4",
		"#b41010",
		"#1010b4",
		"#101010",
		"#ebebeb",
		"#481076",
		"#6a3410",
		"#10466a"
	]
}
export const goethe: Palette = {
	icon: "palette",
	colors: ["#d3071b", "#fa4503", "#ffcc02", "#008d21", "#0ea8eb", "#063f6f"]
}
export const newtown: Palette = {
	icon: "prism",
	colors: [
		"#9400d3",
		"#4b0082",
		"#0000ff",
		"#008000",
		"#ffff00",
		"#ff8000",
		"#ff0000"
	]
}
export const grayscale4: Palette = {
	icon: "shadow",
	colors: ["#000000", "#686868", "#b8b8b8", "#ffffff"]
}
export const schemes: PaletteGroup = new Map([
	["cmyk", cmyk],
	["rgb", rgb],
	["mac16", mac16],
	["riscOS16", riscOS16],
	["web basics", webBasics],
	["rgb 12", rgb12],
	["rgb 8", rgb8],
	["grayscale16", grayscale16],
	["crayola10", crayola10],
	["crayola12", crayola12],
	["grayscale4", grayscale4],
	["munsellCrayola", munsellCrayola],
	["vhs", vhs],
	["goethe", goethe],
	["newtown", newtown]
])

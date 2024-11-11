import { ControlsValues, AnimalListProps } from "../components/cats/types"

export const animalsIcons: [string, string[]][] = [
	["cat", ["egyptiancat", "cat"]],
	["dog", ["labrador", "sittingdog"]],
	["fox", ["fox"]],
	["rabbit", ["rabbit"]],
	["lizard", ["gecko"]],
	["goose", ["goose"]],
	["panda", ["panda"]],
	["bird", ["kiwibird", "egyptianbird"]],
	["fish", ["clownfish", "flyingtrout"]],
	["alpaca", ["alpaca"]],
	["redpanda", ["redpanda"]]
]
export const emptyPics: [string, AnimalListProps][] = animalsIcons.map(
	([id, icons]) => {
		return [id, { icons, list: Array.from({ length: 0 }) }]
	}
)
export const numbers = [
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine"
]
export const defaultControls: ControlsValues = {
	size: 256,
	hideEmpty: false,
	count: 1
}

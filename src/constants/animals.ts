import {
	ControlsValues,
	AnimalListProps,
	animalKey,
	iconKey
} from "../components/cats/components/types"

export const animalsIcons: [animalKey, iconKey[]][] = [
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
export const emptyPics: [animalKey, AnimalListProps][] = animalsIcons.map(
	([id, icons]) => {
		return [id, { icons, list: Array.from({ length: 0 }) }]
	}
)
export const numbers: iconKey[] = [
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

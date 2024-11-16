import { getSteps, shadeGenerator, getTargets } from "./"
import { targetPair, targetVariations, variations } from "../types"

type getTargetVariations = (
	targets: targetPair,
	color: string,
	steps: number
) => [string, targetVariations]
const getTargetVariations: getTargetVariations = ([from, to], color, steps) => {
	const targetVariations = new Map()
	const fromGenerator = shadeGenerator(from, color, steps)
	for (let i = 0; i <= steps; i++) {
		const newColor = fromGenerator.get(i)
		targetVariations.set(newColor.code, newColor)
	}
	const toGenerator = shadeGenerator(color, to, steps)
	for (let i = 0; i <= steps; i++) {
		const newColor = toGenerator.get(i)
		targetVariations.set(newColor.code, newColor)
	}
	targetVariations.set(to, { code: to, inverse: from })
	return [from, targetVariations]
}

type getVariations = (color: string) => variations
export const getVariations: getVariations = (color) => {
	const variations = new Map()
	const steps = getSteps()
	for (const targets of getTargets()) {
		const [from, targetVariations] = getTargetVariations(targets, color, steps)
		variations.set(from, targetVariations)
	}
	return variations
}

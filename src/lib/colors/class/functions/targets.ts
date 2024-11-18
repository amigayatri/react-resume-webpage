import { createSimple } from "../../"
import { target, targetPair } from "../types"

type targetsMap = Map<target, target>
const targets: targetsMap = new Map([["#FFFFFF", "#000000"]])

type getTargets = () => targetPair[]
const getTargets: getTargets = () => {
	return Array.from(targets.entries())
}

type addTarget = (newTarget: target) => void
const addTarget: addTarget = (newTarget) => {
	const { code, inverse } = createSimple(newTarget)
	if (targets.has(code) || targets.has(inverse)) return
	targets.set(code, inverse)
}

type removeTarget = (key: target) => void
const removeTarget: removeTarget = (key) => {
	targets.delete(key.toUpperCase())
}

export interface TargetControllerClass {
	add: addTarget
	remove: removeTarget
	get: getTargets
}

export class TargetController implements TargetControllerClass {
	add = addTarget
	remove = removeTarget
	get = getTargets
}

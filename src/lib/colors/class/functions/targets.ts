import { getInverse } from "../../relations"
import { target, targetPair } from "../types"

type targetsMap = Map<target, target>
const targets: targetsMap = new Map([["#FFFFFF", "#000000"]])

type getTargets = () => targetPair[]
export const getTargets: getTargets = () => {
	return Array.from(targets.entries())
}

type addTarget = (newTarget: target) => void
export const addTarget: addTarget = (newTarget) => {
	targets.set(newTarget.toUpperCase(), getInverse(newTarget))
}

type removeTarget = (key: target) => void
export const removeTarget: removeTarget = (key) => {
	targets.delete(key.toUpperCase())
}

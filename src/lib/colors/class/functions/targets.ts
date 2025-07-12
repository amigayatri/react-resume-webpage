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

type addList = (newTargets: target[]) => void
const addList: addList = (newTargets) => {
    for (const toAdd of newTargets) {
        addTarget(toAdd)
    }
}

type removeTarget = (key: target) => void
const removeTarget: removeTarget = (key) => {
    targets.delete(key.toUpperCase())
}

type getParams = () => string
const getParams = () => {
    const cleanArr = Array.from(targets.entries(), ([from]) => from.replace("#", ""))
    return cleanArr.join(",")
}

export interface TargetControllerClass {
    add: addTarget
    addList: addList
    remove: removeTarget
    get: getTargets
    getParams: getParams
}

export class TargetController implements TargetControllerClass {
    add = addTarget
    addList = addList
    remove = removeTarget
    get = getTargets
    getParams = getParams
}

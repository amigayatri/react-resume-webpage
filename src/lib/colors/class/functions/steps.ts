let variationSteps = 4

type setSteps = (newValue: number) => void
const setSteps: setSteps = (newSteps) => {
	variationSteps = newSteps
}

type getSteps = () => number
const getSteps: getSteps = () => variationSteps

export interface StepControllerClass {
	set: setSteps
	get: getSteps
}

export class StepController implements StepControllerClass {
	set = setSteps
	get = getSteps
}
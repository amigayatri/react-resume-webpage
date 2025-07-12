let variationSteps = 4

type setSteps = (newValue: number) => void
const setSteps: setSteps = (newSteps) => {
    variationSteps = newSteps
}

type getSteps = () => number
const getSteps: getSteps = () => variationSteps

type getParams = () => string
const getParams: getParams = () => variationSteps.toString()

export interface StepControllerClass {
    set: setSteps
    get: getSteps
    getParams: getParams
}

export class StepController implements StepControllerClass {
    set = setSteps
    get = getSteps
    getParams = getParams
}
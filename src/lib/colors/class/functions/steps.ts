let variationSteps = 4

type setSteps = (newValue: number) => void
export const setSteps: setSteps = (newSteps) => {
	variationSteps = newSteps
}

type getSteps = () => number
export const getSteps: getSteps = () => variationSteps

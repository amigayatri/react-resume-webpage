import { TargetController, TargetControllerClass } from "./targets"
import { StepControllerClass, StepController } from "./steps"

export interface ControllerClass {
	steps: StepControllerClass
	targets: TargetControllerClass
}

export class Controller implements ControllerClass {
	steps
	targets
	constructor() {
		this.steps = new StepController()
		this.targets = new TargetController()
	}
}

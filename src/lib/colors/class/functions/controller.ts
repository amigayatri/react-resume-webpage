import { StepController, StepControllerClass } from "./steps"
import { TargetController, TargetControllerClass } from "./targets"

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

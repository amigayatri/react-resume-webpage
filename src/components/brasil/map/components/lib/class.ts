import { ContrastChecker } from "../../../../../lib/colors"
import { contrastId, Controls, ControlsClass, divisionType, PaletteInfoProps } from "./controls"

interface BrazilianMapClass {
	checker: ContrastChecker
	controls: ControlsClass
	getChecker: () => ContrastChecker
}

export class BrazilianMap implements BrazilianMapClass {
    checker
    controls
    constructor(contrastId: contrastId, division: divisionType, palette: PaletteInfoProps) {
        this.controls = new Controls(contrastId, division, palette)
        this.checker = new ContrastChecker(this.controls.palette.colors)
    }

	getChecker() {
		return new ContrastChecker(this.controls.palette.colors)
	}
	
}
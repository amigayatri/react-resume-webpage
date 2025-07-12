import { DefaultTheme } from "styled-components"
import { contrastId, ContrastInfo, contrastValue, getContrastInfo } from "./contrast"
import { divisionType } from "./division"
import { getPaletteInfo, PaletteInfoProps, paletteType } from "./palette"
import { generateSelectStyle } from "./selectStyle"

export interface ControlsInfo {
    contrast: ContrastInfo
    division: divisionType
    palette: paletteType
}

export interface ControlsClass extends ControlsInfo {
    generateSelectStyle: typeof generateSelectStyle
    updateContrast: (newInfo: string) => void
	updateDivision: (newDivision: divisionType) => void
	updatePalette: (newId: string) => void
}

export class Controls implements ControlsClass {
    contrast
    division
    palette
    constructor (contrastId: contrastId, division: divisionType, palette: PaletteInfoProps) {
        this.contrast = getContrastInfo(contrastId)
        this.division = division
        this.palette = getPaletteInfo(palette)
    }

    updateContrast(newInfo: string, byId: boolean = false) {
		if (byId) {
			this.contrast = getContrastInfo(newInfo as contrastId)
		} else {
			this.contrast = getContrastInfo(parseFloat(newInfo) as contrastValue)
		}
    }

    updateDivision(newDivision: divisionType) {
        this.division = newDivision
    }

    updatePalette (newId: string) {
		const [group, name] = newId.split("_")
		const newPalette = {
			group,
			name
		} as PaletteInfoProps
        this.palette = getPaletteInfo(newPalette)
    }

    generateSelectStyle(arg0: DefaultTheme) {
        return generateSelectStyle(arg0)
    }
}

export type { contrastId, divisionType, PaletteInfoProps }


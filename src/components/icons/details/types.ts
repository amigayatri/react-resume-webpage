import { ElementProps, BaseElementProps, iconKey } from "../../../types/common"

export interface MainProps extends ElementProps {
	iconId: string
}

export interface DetailedIconProps extends ElementProps {
	iconId: iconKey
}

export interface DetailedIconBaseProps extends BaseElementProps {}
export interface DetailedIconBaseProps extends DetailedIconProps {}

export interface IconAltProps extends ElementProps {
	iconId: iconKey
}
export interface IconAltBaseProps extends BaseElementProps {}
export interface IconAltBaseProps extends IconAltProps {}

export interface ControlsProps extends BaseElementProps {}
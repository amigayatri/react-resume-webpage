import { ElementProps, BaseElementProps, iconKey } from "../../../types/common"

export interface MainProps extends ElementProps {
	iconId: string
}

export interface DetailedIconProps extends ElementProps {
	iconId: iconKey
}

export interface DetailedIconBaseProps extends BaseElementProps {}
export interface DetailedIconBaseProps extends DetailedIconProps {}

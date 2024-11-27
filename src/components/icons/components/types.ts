import { ElementProps, BaseElementProps, iconKey } from "../../../types/common"

export interface HeroProps extends ElementProps {}
export interface HeroBaseProps extends HeroProps {}
export interface HeroBaseProps extends BaseElementProps {}
export interface IconListProps extends ElementProps {}
export interface IconListBaseProps extends IconListProps {}
export interface IconListBaseProps extends BaseElementProps {}
export interface UsedIconsProps extends ElementProps {}
export interface UsedIconsBaseProps extends UsedIconsProps {}
export interface UsedIconsBaseProps extends BaseElementProps {}
export interface ControlsProps extends ElementProps {
	handleGroups: (group: string) => void
	handleSize: (newSize: number) => void
	size: number
}
export interface ControlsBaseProps extends ControlsProps {}
export interface ControlsBaseProps extends BaseElementProps {}
export interface IconProps extends BaseElementProps {
	color: string
	id: iconKey
	size: number
}

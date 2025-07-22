import { BaseElementProps, ElementProps } from "../../../types/common";

export interface SimpleAuthProps extends ElementProps {}
export interface SimpleAuthBaseProps extends SimpleAuthProps {}
export interface SimpleAuthBaseProps extends BaseElementProps {}

export interface ShowListProps extends ElementProps {
	title: string
	loveMode: boolean
}
export interface ShowListBaseProps extends ShowListProps {}
export interface ShowListBaseProps extends BaseElementProps {}
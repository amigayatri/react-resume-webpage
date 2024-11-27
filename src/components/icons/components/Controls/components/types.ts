import { BaseElementProps } from "../../../../../types/common"

export interface FilterProps extends BaseElementProps {
	handleGroups: (group: string) => void
}
export interface SizeProps extends BaseElementProps {
	handleSize: (newSize: number) => void
	size: number
}

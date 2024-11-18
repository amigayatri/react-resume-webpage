import { BaseElementProps, ElementProps } from "../../types/common"
import { GraphProps } from "../../types/stats"

export interface StatsProps extends ElementProps {}
export interface StatsBaseProps extends BaseElementProps {}
export interface StatsBaseProps extends StatsProps {}
type graphType = "bar"
export interface GraphElementProps extends GraphProps {
	type: graphType
}
export interface BarProps {
	value: number
	max: number
}
export interface BarGraphProps extends GraphProps {
	data: Map<string, number>
	allKeys: string[]
}

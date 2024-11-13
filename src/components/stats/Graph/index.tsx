import { BarGraph } from "./components"
import { GraphElementProps } from "../types"

export const Graph = (props: GraphElementProps) => {
	const { type } = props
	if (type === "bar") return <BarGraph {...props} />
}

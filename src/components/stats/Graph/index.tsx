import GraphProps from "../../../types/GraphProps"
import BarGraph from "./BarGraph"

interface GraphElementProps extends GraphProps {
	type: string
}

const Graph = (props: GraphElementProps) => {
	const { type } = props
	if (type === "bar") return <BarGraph {...props} />
}

export default Graph

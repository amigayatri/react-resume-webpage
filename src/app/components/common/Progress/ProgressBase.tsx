import { ProgressElementProps } from "."
import { ProgressCircle } from "./types/Circle"
import { ProgressBar } from "./types/Bar"

export const ProgressBase = (props: ProgressElementProps) => {
	const { type } = props
	if (type === "bar") return <ProgressBar {...props} />
	if (type === "circle") return <ProgressCircle {...props} />
}

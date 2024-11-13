import { ProgressElementProps } from "."
import { ProgressCircle, ProgressBar } from "./types/"

export const ProgressBase = (props: ProgressElementProps) => {
	const { type } = props
	if (type === "bar") return <ProgressBar {...props} />
	if (type === "circle") return <ProgressCircle {...props} />
}

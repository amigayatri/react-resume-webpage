import {
	BarGraphWrapper,
	BarGraphContainer,
	BarStyle,
	BarKeyStyle,
	BarValueStyle,
	BarWrapper,
	BarGraphTitle
} from "./BarGraph.styled"
import { BarProps, BarGraphProps } from "../../../types"

const Bar = ({ value, max }: BarProps) => {
	return (
		<BarStyle $width={Math.trunc((value / max) * 100)}>
			<BarValueStyle>{value}</BarValueStyle>
		</BarStyle>
	)
}

export const BarGraph = ({
	data,
	allKeys,
	title,
	showTitle
}: BarGraphProps) => {
	let max = 0
	for (const val of data.values()) {
		if (val > max) max = val
	}
	const showBar = (key: string) => {
		const val = data.get(key) || 0
		return (
			<BarWrapper key={"bar-" + key}>
				<Bar value={val} max={max} />
				<BarKeyStyle>{key}</BarKeyStyle>
			</BarWrapper>
		)
	}
	return (
		<BarGraphWrapper>
			{showTitle && <BarGraphTitle>{title}</BarGraphTitle>}
			<BarGraphContainer>
				{allKeys.map((key) => showBar(key))}
			</BarGraphContainer>{" "}
		</BarGraphWrapper>
	)
}

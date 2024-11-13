import { Wrapper, SummaryText } from "./Summary.styled.ts"
import { SummaryProps } from "../types.ts"

export const Summary = ({ summary }: SummaryProps) => {
	return (
		<Wrapper>
			<SummaryText>{summary}</SummaryText>
		</Wrapper>
	)
}

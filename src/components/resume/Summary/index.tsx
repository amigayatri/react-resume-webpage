import { Wrapper, SummaryText } from "./Summary.styled.ts"

interface SummaryProps {
	summary: string
}

const Summary = ({ summary }: SummaryProps) => {
	return (
		<Wrapper>
			<SummaryText>{summary}</SummaryText>
		</Wrapper>
	)
}

export default Summary

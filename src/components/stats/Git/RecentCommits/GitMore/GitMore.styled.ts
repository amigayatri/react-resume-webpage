import styled from "styled-components"
import { AccordionHeaderWrapper } from "../GitDate/GitDate.styled"

export const GitMoreWrapper = styled(AccordionHeaderWrapper)`
	color: ${({ theme }) => theme.purple};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	&::after {
		background-color: ${({ theme }) => theme.pink};
	}
	&::before {
		height: calc(50% + 2px);
		background-color: ${({ theme }) => theme.purple};
	}
`

export const GitButton = styled.a`
	color: ${({ theme }) => theme.pink};
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	margin: 0 8px;
`

export const GitName = styled.span`
	margin: 0 8px;
`

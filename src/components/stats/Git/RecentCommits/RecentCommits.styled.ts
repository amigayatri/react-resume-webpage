import styled from "styled-components"
import { Subtitle } from "../../Common.styled"

export const GitTitle = styled(Subtitle)`
	margin-bottom: 0;
	padding-bottom: 16px;
	border-bottom: 2px solid;
`

export const RecentCommitsWrapper = styled.section`
	background-color: ${({ theme }) => theme.almostBlack};
	margin: 32px 8px;
	padding: 16px calc(var(--color-container) - 8px);
	border-radius: 16px;
	${({ theme }) => theme.scroll}
`

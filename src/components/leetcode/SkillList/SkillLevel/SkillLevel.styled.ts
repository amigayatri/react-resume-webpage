import styled from "styled-components"

export const SkillLevelWrapper = styled.div`
	max-width: var(--max-leetcode);
	margin: 16px auto;
`

export const SkillTag = styled.span<{ $color: string; $size: number }>`
	font-size: ${({ $size }) => $size}px;
	color: ${({ $color }) => $color};
	word-wrap: normal;
	transition: ${({ theme }) => theme.transition};
	scale: 2;

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.primary};
		padding: 8px;
		border-radius: 8px;
	}
`
export const LevelTitle = styled.h3`
	text-transform: capitalize;
	font-size: 1.25rem;
	margin-bottom: 16px;
`

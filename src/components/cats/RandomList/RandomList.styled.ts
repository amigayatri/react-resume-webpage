import styled from "styled-components"

export const Img = styled.img`
	border-radius: 16px;
	border: 4px solid ${({ theme }) => theme.accent};
	transition: ${({ theme }) => theme.transition};
`

export const ListWrapper = styled.div`
	transition: ${({ theme }) => theme.transition};
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.accent};
	border: 4px solid ${({ theme }) => theme.accent};
	border-radius: 16px;
	text-align: center;
	margin: 16px 0;
	padding: 16px 0;
	padding-bottom: 0;
	margin-left: 16px;
	${({ theme }) => theme.scroll}
	&:first-of-type {
		margin-left: 0;
	}
	&:nth-of-type(even) {
		${({ theme }) => theme.blueScroll}
		color: ${({ theme }) => theme.secondAccent};
		border-color: ${({ theme }) => theme.secondAccent};
		& ${Img} {
			border-color: ${({ theme }) => theme.secondAccent};
		}
	}
`

export const List = styled.ul<{ $width: number }>`
	transition: ${({ theme }) => theme.transition};
	list-style: none;
	display: flex;
	flex-direction: column;
	min-width: ${({ $width }) => $width + 32}px;
	max-height: 512px;
	align-items: center;
	overflow-y: auto;

	& ${Img} {
		width: ${({ $width }) => $width}px;
	}
`
export const Item = styled.li`
	margin-top: 16px;
`

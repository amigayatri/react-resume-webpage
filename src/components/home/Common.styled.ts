import styled from "styled-components"
import media from "../../constants/medias"

export const Wrapper = styled.li`
	margin: 0 auto;
	width: 100%;
	height: 100%;

	${media.min.lg} {
		width: 480px;
	}
`

export const ButtonStyle = styled.div<{ $isRTL: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: ${({ $isRTL }) => ($isRTL ? "row-reverse" : "row")};
	padding: 24px 32px;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.accent};
	height: 100%;
	transition: ${({ theme }) => theme.transition};

	${media.max.md} {
		flex-direction: column;
	}
`

export const Label = styled.span`
	text-align: center;
	margin: 8px;
`

import styled from "styled-components"
import media from "../../../constants/medias"

export const Wrapper = styled.section`
	padding: 32px 0;
`

export const ButtonWrapper = styled.div<{ $isRTL: boolean }>`
	flex-direction: row;

	${media.max.sm} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: ${({ $isRTL }) => ($isRTL ? "flex-end" : "flex-start")};
	}
`

export const Button = styled.button<{ $isRTL: boolean }>`
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.background};
	border: none;
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
	padding: 8px 16px;
	border-radius: 4px;
	margin-right: ${({ $isRTL }) => ($isRTL ? "0" : "8px")};
	margin-left: ${({ $isRTL }) => ($isRTL ? "8px" : "0")};
	margin-bottom: 8px;
	font-weight: 700;
	cursor: pointer;
	display: inline-block;
	max-width: 256px;
`

export const InputWrapper = styled.div`
	min-height: 128px;
	padding-top: 8px;
`

export const ColorSelector = styled.input`
	background-color: ${({ theme }) => theme.primary};
	border: none;
	border-radius: 4px;
	height: 128px;
	width: 128px;
	padding: 8px;
	cursor: pointer;
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
`

export const ColorTextInput = styled.textarea`
	background-color: ${({ theme }) => theme.colors.neutral.almostBlack};
	color: ${({ theme }) => theme.colors.base.purple};
	resize: none;
	width: 100%;
	height: 128px;
	text-transform: uppercase;
	border: 2px solid ${({ theme }) => theme.primary};
	box-sizing: border-box;
	border-radius: 4px;
	padding: 8px;
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
`

export const ChangeSteps = styled.input`
	background-color: ${({ theme }) => theme.background};
	font-size: 1.5rem;
	color: ${({ theme }) => theme.accent};
	padding: 8px;
	border-radius: 4px;
	border: 2px solid ${({ theme }) => theme.primary};
	font-family: ${({ theme }) => theme.fonts.body},
		${({ theme }) => theme.fonts.backup};
`

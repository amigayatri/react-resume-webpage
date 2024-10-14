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
	padding-top: 8px;
	transition: ${({ theme }) => theme.transition};
`

export const ColorTextInput = styled.textarea`
	background-color: ${({ theme }) => theme.almostBlack};
	color: ${({ theme }) => theme.purple};
	resize: none;
	width: 100%;
	height: 196px;
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
export const SelectedColor = styled.div<{ $bg: string }>`
	height: 128px;
	width: 128px;
	background-color: ${({ $bg }) => $bg};
	border-radius: 8px;
	border: 2px solid ${({ theme }) => theme.background};
	margin: 8px 0;
`

export const SelectedText = styled.span``
export const TargetWrapper = styled.div`
	display: flex;
	align-items: center;
`
export const SelectedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px 32px;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.background};
	border-radius: 8px;
	margin-left: 16px;
	height: 196px;
`
export const SelectedButton = styled(Button)`
	height: fit-content;
`
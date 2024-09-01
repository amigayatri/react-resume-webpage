import styled from "styled-components"

export const Wrapper = styled.section`
	padding: 32px 0;
`

export const ButtonWrapper = styled.div``

export const Button = styled.button`
	background-color: ${({ theme }) => theme.accent};
	color: ${({ theme }) => theme.background};
	border: none;
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
	padding: 8px 16px;
	border-radius: 4px;
	margin-right: 8px;
	font-weight: 700;
	cursor: pointer;
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
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
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
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
`

export const ChangeSteps = styled.input`
	background-color: ${({ theme }) => theme.background};
	font-size: 24px;
	color: ${({ theme }) => theme.accent};
	padding: 8px;
	border-radius: 4px;
	border: 2px solid ${({ theme }) => theme.primary};
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
`

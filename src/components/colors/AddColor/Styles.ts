import styled from "styled-components"

export const Wrapper = styled.section`
	padding: 32px 0;
`

export const ButtonWrapper = styled.div``

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.background};
	font-family: "Fira Code", monospace;
	padding: 8px 16px;
	border-radius: 4px;
`

export const InputWrapper = styled.div`
	min-height: 72px;
	padding-top: 8px;
`

export const ColorSelector = styled.input`
	background-color: ${({ theme }) => theme.colors.primary};
	border: none;
	border-radius: 4px;
	height: 64px;
	width: 128px;
`

export const ColorTextInput = styled.textarea`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.primary};
	resize: none;
	width: 100%;
	text-transform: uppercase;
	border-color: ${({ theme }) => theme.colors.primary};
	border-width: 1px;
	border-style: solid;
	box-sizing: border-box;
	border-radius: 8px;
	padding: 8px;
`

export const ChangeSteps = styled.input`
	background-color: ${({ theme }) => theme.colors.background};
	font-size: 24px;
	color: ${({ theme }) => theme.colors.primary};
	padding: 8px;
	border: 1px solid ${({ theme }) => theme.colors.primary};
`

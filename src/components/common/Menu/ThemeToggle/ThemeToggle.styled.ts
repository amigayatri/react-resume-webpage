import styled from "styled-components"
import { ToggleWrapper } from "../../Toggle/Toggle.styled"

export const ThemeToggleWrapper = styled(ToggleWrapper)`
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.black};
	border-color: ${({ theme }) => theme.accent};
`

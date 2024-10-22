import styled from "styled-components"
import { Button, List } from "../Common.styled"

export const RandomDogWrapper = styled.section`
	padding: 32px var(--color-container);
	${({ theme }) => theme.scroll}
`
export const DogList = styled(List)`
	background-color: ${({ theme }) => theme.secondAccent};
	border-color: ${({ theme }) => theme.accent};
`
export const DogButton = styled(Button)`
	background-color: ${({ theme }) => theme.secondAccent};
	color: ${({ theme }) => theme.accent};
	border-color: ${({ theme }) => theme.accent};
`

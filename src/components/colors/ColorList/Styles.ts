import styled from "styled-components"

export const Wrapper = styled.section`
	padding: 32px 0;
`

export const SubHeading = styled.summary`
	font-family: ${({ theme }) => theme.fonts.body}, ${({ theme }) => theme.fonts.backup};
`

export const ListWrapper = styled.ul`
    padding: 0;
    margin: 0;
`
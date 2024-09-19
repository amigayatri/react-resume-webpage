import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.li`
	background-color: ${({ theme }) => theme.accent};
    width: fit-content;
    padding: 24px 32px;
    border-radius: 16px;
    margin: 0 auto;
`
export const LinkExternal = styled.a`
    color: ${({ theme }) => theme.background};
    text-decoration: none;
    font-size: 1.25rem;
`

export const LinkInternal = styled(Link)`
    color: ${({ theme }) => theme.background};
    text-decoration: none;
    font-size: 1.25rem;
`
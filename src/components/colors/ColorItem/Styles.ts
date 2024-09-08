import styled from "styled-components"

export const Wrapper = styled.li<{$border: string}>`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: 120px;
    color: ${({theme}) => theme.background};
    border: 2px solid ${props => props.$border};
    background-color: ${({theme}) => theme.primary};
    padding: 4px;
    margin: 8px 8px 0 0;
    border-radius: 4px;
`

export const ColorTag = styled.code<{$code: string}>`
    color: ${props => props.$code};
`

export const ColorSquare = styled.div<{$code: string}>`
    height: 20px;
    width: 20px;
    border-radius: 4px;
    margin-right: 8px;
    position: relative;
    border: 2px solid ${({theme}) => theme.primary};
    background-color: ${props => props.$code};
`
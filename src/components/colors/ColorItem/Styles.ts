import styled from "styled-components"

export const Wrapper = styled.li<{$tagColor: string}>`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: 120px;
    color: ${props => props.$tagColor};
    border: 4px solid ${props => props.$tagColor};
    padding: 4px 0;
    margin: 8px 8px 0 0;
    border-radius: 4px;
`

export const ColorTag = styled.code``

export const ColorSquare = styled.div`
    height: 16px;
    width: 16px;
    border-radius: 4px;
    margin-right: 8px;
    position: relative;
    border: 2px solid ${({theme}) => theme.primary};
`
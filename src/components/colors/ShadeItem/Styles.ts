import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    min-width: 64px;
    width: 64px;
    height: 64px;
    overflow: visible;
    margin-top: 8px;
`

export const HexaCode = styled.code``

export const Square = styled.div<{$base: boolean, $bg: string, $inverse: string}>`
    background-color: ${props => props.$bg};
    border-color: ${({theme}) => theme.primary};
    border-width: 2px;
    border-style: ${props => props.$base? 'solid' : 'none'};
    height: 64px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & > code {
        width: 0px;
        display: block;
        overflow: hidden;
        color: ${props => props.$inverse};
        cursor: pointer;
    }
    &:hover {
        height: 80px;
        width: 80px;
        position: absolute;
        top: -8px;
        left: -8px;
        z-index: 5;
        & > code {
            width: fit-content;
        }
    }
`
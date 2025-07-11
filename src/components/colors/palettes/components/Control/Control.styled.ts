"use client"

import styled from "styled-components"
import { media } from "../../../../../constants/medias"

export const ButtonWrapper = styled.button<{ $selected: boolean }>`
    color: ${({ theme }) => theme.primary};
    border: 2px solid currentColor;
    border-radius: 8px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $selected, theme }) => ($selected ? theme.accent : "transparent")};
    margin-left: 8px;
    &:first-of-type {
        margin-left: 0;
    }
    ${media.max.md} {
        margin-top: 8px;
		margin-bottom: 8px;
    }
`

export const SortWrapper = styled.div`
    display: flex;
	& ${ButtonWrapper} {
		margin-bottom: 0;
	}
`

export const ControlWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.max.md} {
        flex-direction: column-reverse;
        align-items: flex-end;
    }
    ${media.max.sm} {
        align-items: flex-start;
    }
`
export const CopyPalette = styled.div`
    cursor: pointer;
    width: fit-content;
	margin-bottom: 8px;
`
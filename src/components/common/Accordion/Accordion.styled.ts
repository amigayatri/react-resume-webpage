"use client"

import styled from "styled-components"

export const AccordionButton = styled.span`
    font-size: 1.125rem;
    display: inline-block;
    width: 100%;
    cursor: pointer;
    &::after {
        content: "";
        float: right;
        width: 12px;
        height: 12px;
		border: 2px solid ${({ theme }) => theme.primary};
        border-top: none;
        border-right: none;
        margin-right: 8px;
		margin-top: 4px;
        transition: ${({ theme }) => theme.transition};
    }
`

export const AccordionContent = styled.div`
    height: fit-content;
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
`

export const AccordionWrapper = styled.div<{ $open: boolean; $bgColor?: string; $color?: string }>`
    transition: ${({ theme }) => theme.transition};
    width: calc(100% + 16px);
    padding: 8px 8px;
    margin: 0 -8px;
	background-color: ${({ theme, $bgColor }) => $bgColor || theme.background};
    color: ${({ theme, $color }) => $color || theme.primary};
    border: 2px solid ${({ theme, $color }) => $color || theme.primary};
    border-radius: 16px;

    & ${AccordionButton}::after {
        border-color: ${({ theme, $color }) => $color || theme.primary};
        transform: rotate(${({ $open }) => ($open ? "135deg" : "-45deg")});
    }

    & ${AccordionContent} {
        max-height: ${({ $open }) => ($open ? "1024px" : "0")};
		padding-top: ${({ $open }) => ($open ? "8px" : "0")};
    }
`
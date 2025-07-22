"use client"

import styled from "styled-components"

export const ShowListWrapper = styled.section``

export const SectionTitle = styled.h2<{ $loveMode: boolean }>`
    font-size: 1.5rem;
    margin: 16px 0;
    overflow-x: auto;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    &::after,
    &::before {
        content: "<3";
        font-size: 2rem;
        display: ${({ $loveMode }) => ($loveMode ? "inline-flex" : "none")};
        background-color: ${({ $loveMode, theme }) => ($loveMode ? theme.pink : theme.white)};
        height: 48px;
        width: 48px;
        justify-content: center;
        align-items: center;
        transform: rotateZ(-90deg);
        border-radius: 24px;
        margin: 0 16px;
    }
`

"use client"

import styled from "styled-components"

export const ShowListWrapper = styled.section``

export const SectionTitle = styled.h2<{ $loveMode: boolean }>`
    font-size: 2.5rem;
    margin: 16px 0;
    overflow-x: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.pink};

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
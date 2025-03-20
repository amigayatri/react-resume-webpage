"use client"

import styled from "styled-components"
import { media } from "../../../../../constants/medias"

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.background};
    position: relative;
    padding: 0 0 32px;
    width: fit-content;
    margin: 0 auto 16px;

    ${media.max.md} {
        transform: none;
        margin-top: 0;
        margin-bottom: 8px;
        margin-left: var(--container);
    }

    ${media.print} {
        padding-bottom: 32px 0;
        margin: 0 var(--container);
    }
`

export const Field = styled.input`
    font-size: 24px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 8px;

    &:last-of-type {
        margin-right: 0;
    }
`

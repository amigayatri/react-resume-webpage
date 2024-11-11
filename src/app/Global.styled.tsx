"use client"

import { createGlobalStyle } from "styled-components"
import { media } from "../constants/medias"

export const GlobalStyle = createGlobalStyle`
    :root {
        position: relative;
        --header-size: 80px;
        --footer-size: 64px;
        --container: 32px;
        --color-container: 32px;
        --fullpage: calc(100vh - var(--header-size) - var(--footer-size));
        --max-leetcode: 480px;

        ${media.min.md} {
            --container: calc((100% - 700px)/ 2);
            --color-container: 64px;
            --max-leetcode: 640px;
        }

        ${media.print} {
            --container: 32px;
        }

        background-color: ${({ theme }) => theme.black};
    }

    body {
        margin: 0;
        margin-top: var(--header-size);
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.primary};
        font-size: 16px ;
    }

    * {
	    box-sizing: border-box;
	    font-family: 'Fira Code', monospace;
        margin: 0;
        padding: 0;
        ${media.print} {
            font-family: 'Noto Sans', sans-serif;
        }

    }
    img {
	    object-fit: contain;
    }
`

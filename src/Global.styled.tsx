import { createGlobalStyle } from "styled-components";
import media from "./constants/medias"

const GlobalStyle = createGlobalStyle<{
	$isRTL: boolean
	$isAmplified: boolean
}>`
    :root {
        --container: 32px;
        --color-container: 32px;
        --fullpage: calc(100vh - 94px);

        ${media.min.md} {
            --container: calc((100% - 700px)/ 2);
            --color-container: 64px;
        }

        ${media.print} {
            --container: 32px;
        }

        background-color: ${({ theme }) => theme.black};
    }

    body {
        margin: 0;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.primary};
        font-size: ${({ $isAmplified }) => ($isAmplified ? "20px" : "16px")} ;
        text-align: ${({ $isRTL }) => ($isRTL ? "right" : "left")} ;
    }

    * {
	    box-sizing: border-box;
	    font-family: 'Fira Code', monospace;
        ${media.print} {
            font-family: 'Noto Sans', sans-serif;
        }

    }
    img {
	    object-fit: contain;
    }
`
export default GlobalStyle
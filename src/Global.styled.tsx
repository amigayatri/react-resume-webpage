import { createGlobalStyle } from "styled-components";
import media from "./constants/medias"

const GlobalStyle = createGlobalStyle`
    :root {
        --container: 32px;
        --color-container: 32px;

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
        font-size: 16px;
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
export default GlobalStyle
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --container: 32px;
        --color-container: 32px;

        @media (min-width: 1024px) {
            --container: calc((100% - 700px)/ 2);
            --color-container: 64px;
        }

        @media print {
            --container: 32px;
        }

        background-color: #212117;
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
        @media print {
            font-family: 'Noto Sans', sans-serif;
        }

    }
    img {
	    object-fit: contain;
    }
`
export default GlobalStyle
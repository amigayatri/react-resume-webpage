import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #e5e5e5;
        --color-primary: #000000;
        --container: 32px;

        @media (min-width: 1024px) {
            --container: 128px;
        }
        @media (min-width: 1600px) {
            --container: calc((100% - 1000)/ 2);
        }
    }

    body {
        margin: 0;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.primary};
        font-size: 16px;
    }

    * {
	    box-sizing: border-box;
	    font-family: 'Noto Sans', sans-serif;
    }
    img {
	    object-fit: contain;
    }
`;



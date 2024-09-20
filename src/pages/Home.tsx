import { Header } from "../components/home/Header/Header";
import { ThemeProvider } from "styled-components";
import { MonokaiTheme } from "../components/Themes/colors/Monokai";
import { Main } from "../components/home/Main/Main";

export const Home = () => {
    return (
        <ThemeProvider theme={MonokaiTheme}>
            <Header />
            <Main />
        </ThemeProvider>
    );
};

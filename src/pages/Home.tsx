import { Header } from "../components/colors/Header/Header";
import { Main } from "../components/colors/Main/Main"
import { ThemeProvider } from "styled-components";
import { MonokaiTheme } from "../components/Themes/colors/Monokai";

export const Home = () => {
    return (
        <ThemeProvider theme={MonokaiTheme}>
            <Header />
            <Main />
        </ThemeProvider>
    );
};

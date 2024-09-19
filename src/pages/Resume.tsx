import { Section } from "../components/resume/Section/Section";
import { Summary } from "../components/resume/Summary/Summary";
import { Contacts } from "../components/resume/Contact/Contact";
import { sections } from "../constants";
import { Header } from "../components/resume/Header/Header";
import { ThemeProvider } from "styled-components";
import { MonokaiTheme } from "../components/Themes/colors/Monokai";

export const Resume = () => {
    return (
        <ThemeProvider theme={MonokaiTheme}>
            <Header />
            <main>
                <Contacts />
                <Summary />
                {sections.map((section, index) => {
                    return (<Section key={"section" + index} section={section} />)
                })}
            </main>
        </ThemeProvider>
    );
};

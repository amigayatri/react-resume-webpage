import { Section } from "../components/resume/Section/Section";
import { Summary } from "../components/resume/Summary/Summary";
import { sections } from "../constants";
import { Header } from "../components/resume/Header/Header";

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Summary />
                {sections.map((section, index) => {
                    return (<Section key={"section" + index} section={section} />)
                })}
            </main>
        </>
    );
};

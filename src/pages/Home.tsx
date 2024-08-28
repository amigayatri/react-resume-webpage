import { Section } from "../components/resume/Section";
import { Summary } from "../components/resume/Summary";
import { sections } from "../constants";

export const Home = () => {

    return (
        <main>
            <Summary />
            {sections.map((section, index) => {
                return (<Section key={"section" + index} section={section} />)
            })}
        </main>
    );
};

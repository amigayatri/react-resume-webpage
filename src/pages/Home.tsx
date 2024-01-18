import { Section } from "../components/Section";
import { Summary } from "../components/Summary";
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

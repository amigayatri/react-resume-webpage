import { useTranslation } from "react-i18next";
import { Wrapper, SectionTitle, SectionList, SectionItem, SubitemText } from "./Styles";

interface SectionProps {
    section: {
        name: string,
        items: string[],
        subitem?: boolean
    }
}

export const Section = ( props: SectionProps) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <SectionTitle>{t(`sections.${props.section.name}.title`)}</SectionTitle>
            <SectionList>
                {props.section.items.map((item) => {
                    return (<SectionItem key={props.section.name+ "-" + item}>
                        {t(`sections.${props.section.name}.items.${item}.text`)}
                        {props.section.subitem && <SubitemText>{t(`sections.${props.section.name}.items.${item}.subitem`)}</SubitemText>}
                    </SectionItem>)
                })}
            </SectionList>
        </Wrapper>
    );
}
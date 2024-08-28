import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Wrapper = styled.section`
    padding: 0 var(--container) 32px;     
`;

const SectionTitle = styled.h3`
    font-size: 1.5rem;
    margin: 0 0 16px;
`

const SectionList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const SectionItem = styled.li`
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 8px;
`

const SubitemText = styled.p`
    font-size: 1rem;
    display: block;
    width: 100%;
    margin: 4px 0 8px;
    font-weight: 300;
`

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
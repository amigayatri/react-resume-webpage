import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Contacts } from "./Contact";

const Wrapper = styled.section`
    display: flex;
    padding: 0 var(--container) 32px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;        
    }
`;

const SummaryText = styled.p`
    margin: 0 16px 0 0;
    font-size: 1.25rem;
`

export const Summary = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <SummaryText>{t("summary.text")}</SummaryText>
            <Contacts />
        </Wrapper>
    );
}
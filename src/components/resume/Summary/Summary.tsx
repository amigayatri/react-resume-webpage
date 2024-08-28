import { useTranslation } from "react-i18next";
import { Contacts } from "../Contact/Contact.tsx";
import { Wrapper, SummaryText } from './Styles.ts';


export const Summary = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <SummaryText>{t("summary.text")}</SummaryText>
            <Contacts />
        </Wrapper>
    );
}
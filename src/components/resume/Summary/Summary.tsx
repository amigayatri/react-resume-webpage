import { useTranslation } from "react-i18next";
import { Wrapper, SummaryText } from './Styles.ts';


export const Summary = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <SummaryText>{t("resume.summary.text")}</SummaryText>
        </Wrapper>
    );
}
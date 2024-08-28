import { useTranslation } from "react-i18next";
import { FooterWrapper } from "./Styles";

export const Footer = () => {
  const { t } = useTranslation();

    return (
        <FooterWrapper>
            {t("footer.text")} Amira Gayatri - 2024
        </FooterWrapper>
    );
};

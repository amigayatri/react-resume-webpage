import { useTranslation } from "react-i18next";
import { FooterWrapper, Link, Name } from "./Styles";

export const Footer = () => {
  const { t } = useTranslation();

    return (
        <FooterWrapper>
            <Link href="https://github.com/amigayatri/react-resume-webpage">{t("footer.link")}</Link> {t("footer.text")} <Name>Amira Gayatri</Name> - 2024
        </FooterWrapper>
    );
};

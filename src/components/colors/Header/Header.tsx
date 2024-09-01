import { useTranslation } from "react-i18next";
import { HeaderWrapper, Title, SubHeading } from "./Styles";

export const Header = () => {
  const { t } = useTranslation();

    return (
        <HeaderWrapper>
            <Title>{t("colors.header.title")}</Title>
            <SubHeading>{t("colors.header.summary")}</SubHeading>
        </HeaderWrapper>
    );
};
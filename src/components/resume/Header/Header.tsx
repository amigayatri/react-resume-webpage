import { useTranslation } from "react-i18next";
import { HeaderWrapper, Name, SubHeading } from "./Styles";

export const Header = () => {
  const { t } = useTranslation();

    return (
        <HeaderWrapper>
            <Name>{t("header.name")}</Name>
            <SubHeading>{t("header.subheading")}</SubHeading>
        </HeaderWrapper>
    );
};
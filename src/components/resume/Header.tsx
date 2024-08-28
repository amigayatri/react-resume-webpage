import { useTranslation } from "react-i18next";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    padding: 16px var(--container) 32px;
    position: relative;
`;

const Name = styled.h1`
    font-family: 'Noto Sans Mono', monospace;
    margin: 0;
    line-height: 1;
`

const SubHeading = styled.h2`
    font-family: 'Noto Sans Mono', monospace;
    margin: 8px 0 0;
    line-height: 1;
`

export const Header = () => {
  const { t } = useTranslation();

    return (
        <HeaderWrapper>
            <Name>{t("header.name")}</Name>
            <SubHeading>{t("header.subheading")}</SubHeading>
        </HeaderWrapper>
    );
};
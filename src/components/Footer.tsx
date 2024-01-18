import { useTranslation } from "react-i18next";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    width: 100%;
    padding: 16px;
    text-align: center;
`;

export const Footer = () => {
  const { t } = useTranslation();

    return (
        <FooterWrapper>
            {t("footer.text")} Amira Gayatri - 2024
        </FooterWrapper>
    );
};

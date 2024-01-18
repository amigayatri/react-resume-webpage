import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/index";
import styled from "styled-components";

const MenuWrapper = styled.nav`
  background-color: #000000;
  color: #e5e5e5;
  padding: 4px var(--container);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
`;

const LanguageSelect = styled.select`
  font-size: 1.25rem;
  background-color: #000000;
  color: #e5e5e5;
  border-color: #000000;
`

const IconWrapper = styled.span`
  width: 24px;
  height: 24px;
  margin: 2px;
  display: inline-block;
  padding: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  z-index: 5;
  
  &.light {
    transform: translate(12px);
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  width: 44px;
  height: 32px;
  position: relative;
  background-color: ${({ theme }) => theme.background};
  border: solid 2px #727272;
  border-radius: 16px;
  margin-left: 16px;
`

const LanguageOption = styled.option`

`

interface MenuProps {
  changeTheme: () => void;
  theme: string;
}

interface ToggleProps {
  changeTheme: () => void;
  theme: string;
}

const SunIcon = () => {
  return (
    <svg fill="#e5e5e5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect fill="none" height="256" width="256"/>
      <circle cx="128" cy="128" r="68"/>
      <path d="M128,44a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8,8,0,0,0,128,44Z"/>
      <path d="M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3L54.5,43.1A8.1,8.1,0,1,0,43.1,54.5Z"/>
      <path d="M44,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8,8,0,0,0,44,128Z"/>
      <path d="M57.3,187.4,43.1,201.5a8.1,8.1,0,0,0,0,11.4,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3l14.1-14.2a8,8,0,0,0-11.3-11.3Z"/>
      <path d="M128,212a8,8,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8,8,0,0,0,128,212Z"/>
      <path d="M198.7,187.4a8,8,0,0,0-11.3,11.3l14.1,14.2a8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z"/>
      <path d="M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z"/>
      <path d="M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l14.2-14.1a8.1,8.1,0,0,0-11.4-11.4L187.4,57.3a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z"/>
    </svg>
  )
}

const MoonIcon = () => {
  return (
    <svg fill="#000000" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect fill="none" height="256" width="256"/>
      <path d="M224.3,150.3a8.1,8.1,0,0,0-7.8-5.7l-2.2.4A84,84,0,0,1,111,41.6a5.7,5.7,0,0,0,.3-1.8A7.9,7.9,0,0,0,101,31.7,100,100,0,1,0,224.3,154.9,7.2,7.2,0,0,0,224.3,150.3Z"/>
    </svg>
  )
}

const Toggle = (props: ToggleProps) => {
  const { t } = useTranslation();

  return (
    <ToggleWrapper tabIndex={0} aria-label={t("menu.theme.change")} onClick={() => props.changeTheme()} onKeyDown={(e) => e.key === "enter" && props.changeTheme() }>
      <IconWrapper className={props.theme === "light"? "light ": ""}>
        {props.theme === "dark" && <MoonIcon/>}
        {props.theme === "light" && <SunIcon/>}   
      </IconWrapper>
    </ToggleWrapper>
  )
}

export const Menu = (props: MenuProps) => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <MenuWrapper>
      
      <LanguageSelect defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code }) => (
          <LanguageOption key={code} value={code}>
            {t(`menu.languages.${code}`)}
          </LanguageOption>
        ))}
      </LanguageSelect>
      <Toggle changeTheme={props.changeTheme} theme={props.theme} />
    </MenuWrapper>
  );
};

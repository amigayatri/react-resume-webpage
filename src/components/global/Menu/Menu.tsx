import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../constants/index";
import { MenuWrapper, LanguageOption, LanguageSelect } from "./Styles";
import { Toggle } from "./Toggle";

interface MenuProps {
  changeTheme: () => void;
  theme: string;
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

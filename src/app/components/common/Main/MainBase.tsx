import { i18n } from "i18next"
import { MainProps } from "."
import { MainWrapper } from "./Main.styled"

interface MainBaseProps extends MainProps {
	i18n: i18n
}

export const MainBase = ({ children }: MainBaseProps) => {
	return <MainWrapper>{children}</MainWrapper>
}

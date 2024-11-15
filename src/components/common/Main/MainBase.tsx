import { CSSProperties } from "styled-components"
import { MainProps } from "."
import { MainWrapper } from "./Main.styled"

interface MainBaseProps extends MainProps {
	customStyle?: CSSProperties
}

export const MainBase = ({ children, customStyle }: MainBaseProps) => {
	return <MainWrapper style={customStyle}>{children}</MainWrapper>
}

import { MainProps } from "."
import { MainWrapper } from "./Main.styled"

export const MainBase = ({ children }: MainProps) => {
	return <MainWrapper>{children}</MainWrapper>
}

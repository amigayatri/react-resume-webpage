import BaseElement from "../../../types/BaseElementProps"
import { PageList } from "../PageList"
import { MainWrapper } from "./Main.styled"

export const MainBase = ({ lng }: BaseElement) => {
	return (
		<MainWrapper>
			<PageList lng={lng} />
		</MainWrapper>
	)
}

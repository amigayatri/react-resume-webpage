import { Wrapper, ListWrapper } from "./PageList.styled"
import { HomeLink } from "../HomeLink"
import BaseElement from "../../../types/BaseElementProps"
import { links } from "../../../constants/home"

export const PageListBase = ({ lng }: BaseElement) => {
	return (
		<Wrapper>
			<ListWrapper>
				{links.map((link, index: number) => (
					<HomeLink to={link} lng={lng} key={"home-link-" + index} />
				))}
			</ListWrapper>
		</Wrapper>
	)
}

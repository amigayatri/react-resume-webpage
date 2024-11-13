import { Wrapper, ListWrapper } from "./PageList.styled"
import { PageLink } from "../PageLink"
import { PageListBaseProps } from "./"

export const PageListBase = ({ lng, links, local }: PageListBaseProps) => {
	return (
		<Wrapper>
			<ListWrapper>
				{links.map((link, index: number) => {
					if (link.path === "") return
					return <PageLink to={link} lng={lng} key={local + "-link-" + index} />
				})}
			</ListWrapper>
		</Wrapper>
	)
}

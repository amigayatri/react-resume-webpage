import { links } from "../../../constants/links"
import { PageList } from "../../common/"
import { HomeListProps } from "../types"

export const HomeList = async ({ lng }: HomeListProps) => {
	return <PageList lng={lng} links={links} local="home" namespace="pagelist" />
}

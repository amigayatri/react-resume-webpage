import { brazilianLinks } from "../../../../constants/links"
import { PageList } from "../../../common/"
import { SimpleHero } from "../../../common/client"
import { BrasilListProps } from "../../types"

export const BrasilList = async ({ lng }: BrasilListProps) => {
	return (
		<>
			<SimpleHero
				titleIcon="brasil"
				lng={lng}
				namespace="brasil"
				local="brasil"
				hasMulticolored
				paletteInfo={{ group: "rainbow", name: "rainbow monokai" }}
			/>
			<PageList
				lng={lng}
				links={brazilianLinks}
				local="brasil"
				namespace="pagelist"
				hasDetails
			/>
		</>
	)
}

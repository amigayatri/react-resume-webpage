import { colorLinks } from "../../../../constants/links"
import { PageList } from "../../../common/"
import { SimpleHero } from "../../../common/client"
import { ColorsListProps } from "../../types"

export const ColorsList = async ({ lng }: ColorsListProps) => {
	return (
		<>
			<SimpleHero
				lng={lng}
				namespace="colors"
				local="colors"
				hasMulticolored
				titleIcon="rainbow"
				paletteInfo={{ group: "theme", name: "accent" }}
			/>
			<PageList
				lng={lng}
				links={colorLinks}
				local="colors"
				namespace="pagelist"
				hasDetails
			/>
		</>
	)
}

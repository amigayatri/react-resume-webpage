import { brazilianLinks } from "../../../../constants/links"
import { PageList } from "../../../common/"
import { BrasilListProps } from "../../types"

export const BrasilList = async ({ lng }: BrasilListProps) => {
	return (
		<PageList
			lng={lng}
			links={brazilianLinks}
			local="brasil"
			namespace="pagelist"
		/>
	)
}

import {
	Title,
	Summary,
	DescriptionWrapper,
	PageSelectWrapper
} from "./Description.styled"
import { LanguageSelect } from "../../common/client"
import { DescriptionBaseProps } from "../types"

export const DescriptionBase = ({ t, lng }: DescriptionBaseProps) => {
	return (
		<DescriptionWrapper>
			<Title>{t("title")}</Title>
			<Summary>{t("summary")}</Summary>
			<PageSelectWrapper>
				<LanguageSelect onError={false} lng={lng} isExtra />
			</PageSelectWrapper>
		</DescriptionWrapper>
	)
}

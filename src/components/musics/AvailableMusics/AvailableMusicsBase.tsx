import {
	Title,
	Summary,
	AvailableMusicsWrapper
} from "./AvailableMusics.styled"
import { AvailableMusicsBaseProps } from "../types"
import { availableMusicsNames } from "../../../constants/musics"

export const AvailableMusicsBase = ({ t }: AvailableMusicsBaseProps) => {
	console.log(availableMusicsNames)
	return (
		<AvailableMusicsWrapper>
			<Title>{t("title")}</Title>
			<Summary>{t("summary")}</Summary>
		</AvailableMusicsWrapper>
	)
}

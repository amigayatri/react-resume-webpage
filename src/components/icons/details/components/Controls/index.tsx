import { ControlWrapper, BackButton, ButtonLabel } from "./Controls.styled"
import { ControlsProps } from "../../types"
import { SVGIcon } from "../../../../common/client"

export const Controls = ({ t, lng }: ControlsProps) => {
	return (
		<ControlWrapper>
			<BackButton href={`/${lng}/icons`}>
				<SVGIcon size={32} lng={lng} local="detailed" id="arrow" />
				<ButtonLabel>{t("back")}</ButtonLabel>
			</BackButton>
		</ControlWrapper>
	)
}

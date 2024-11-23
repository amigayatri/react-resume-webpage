import { SVGIcon } from "../../../common/SVGIcon/client"
import {
	DetailedIconWrapper,
	IconWrapper,
	Title,
	Alt,
	AltText
} from "./DetailedIcon.styled"
import { DetailedIconBaseProps } from "../types"
import { capitalize } from "../../../../lib/utils"
import { Trans } from "react-i18next/TransWithoutContext"

export const DetailedIconBase = ({ lng, iconId, t }: DetailedIconBaseProps) => {
	return (
		<DetailedIconWrapper>
			<Title>{capitalize(iconId)}</Title>
			<Alt>
				<Trans
					t={t}
					i18nKey="details.alt"
					tOptions={{ altContent: t(`alt.${iconId}`) }}
				>
					t<AltText>s</AltText>
				</Trans>
			</Alt>
			<IconWrapper>
				<SVGIcon
					lng={lng}
					id={iconId}
					size={360}
					local="detailed-icon"
				/>
			</IconWrapper>
		</DetailedIconWrapper>
	)
}

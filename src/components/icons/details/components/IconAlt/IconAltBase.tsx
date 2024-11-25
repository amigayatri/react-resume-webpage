import { Alt, AltText } from "./IconAlt.styled"
import { IconAltBaseProps } from "../../types"
import { Trans } from "react-i18next/TransWithoutContext"

export const IconAltBase = ({ iconId, t }: IconAltBaseProps) => {
	return (
		<Alt>
			<Trans
				t={t}
				i18nKey="details.alt"
				tOptions={{ altContent: t(`alt.${iconId}`) }}
			>
				t<AltText>s</AltText>
			</Trans>
		</Alt>
	)
}

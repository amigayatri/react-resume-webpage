import { SVGIcon } from "../../../common/client"
import { DetailedIconWrapper, IconWrapper, Title } from "./DetailedIcon.styled"
import { DetailedIconBaseProps } from "../types"
import { capitalize } from "../../../../lib/utils"
import { IconAlt, Controls } from "../components"

export const DetailedIconBase = ({ lng, iconId, t }: DetailedIconBaseProps) => {
	return (
		<DetailedIconWrapper>
			<Controls t={t} lng={lng} />
			<Title>{capitalize(iconId)}</Title>
			<IconAlt lng={lng} iconId={iconId} />
			<IconWrapper>
				<SVGIcon
					responsive
					lng={lng}
					id={iconId}
					size={360}
					local="detailed-icon"
				/>
			</IconWrapper>
		</DetailedIconWrapper>
	)
}

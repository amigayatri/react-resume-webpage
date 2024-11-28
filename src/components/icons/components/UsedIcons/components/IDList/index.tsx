import { IDListWrapper, IDWrapper, ID, Subtitle } from "./IDList.styled"
import { IDListProps } from "../types"
import { getColorByIdx } from "../../../functions"
import { SVGIcon } from "../../../../../common/client"
import { iconKey } from "../../../../../../icons"

export const IDList = ({ idList, currLocal, t, lng }: IDListProps) => {
	const showIconID = (iconId: iconKey, idx: number) => {
		const iconProps = {
			id: iconId,
			size: 20,
			local: "icon-stats",
			lng
		}
		return (
			<IDWrapper
				key={iconId + "id-list"}
				style={{ color: getColorByIdx(idx) }}
			>
				<SVGIcon {...iconProps} />
				<ID>{iconId}</ID>
				<SVGIcon {...iconProps} />
			</IDWrapper>
		)
	}

	return (
		<IDListWrapper>
			<Subtitle>
				{t("stats.sections.local", { localKey: currLocal })}
			</Subtitle>
			{idList.map(showIconID)}
		</IDListWrapper>
	)
}

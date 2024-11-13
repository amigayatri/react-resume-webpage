import { IconListWrapper, List, IconItem, Id, Icon } from "./IconList.styled"
import { iconsIds } from "../../../constants/icons.ts"
import { rainbowMonokai } from "../../../constants/palettes/rainbow.ts"
import { SVGIcon } from "../../common/SVGIcon/client"
import { IconListBaseProps } from "../types"

export const IconListBase = ({ lng }: IconListBaseProps) => {
	return (
		<IconListWrapper>
			<List>
				{iconsIds.map((id, idx) => (
					<IconItem key={"icon-with-id-" + id}>
						id: <Id>{id}</Id>
						<Icon
							style={{
								color: rainbowMonokai.colors[idx % rainbowMonokai.colors.length]
							}}
						>
							<SVGIcon lng={lng} local="iconlist" id={id} size={48} />
						</Icon>
					</IconItem>
				))}
			</List>
		</IconListWrapper>
	)
}

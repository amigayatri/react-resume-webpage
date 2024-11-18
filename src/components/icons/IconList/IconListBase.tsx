import { IconListWrapper, List, IconItem, Id, Icon } from "./IconList.styled"
import { iconsIds } from "../../../constants/icons.ts"
import { getSafePaletteColors } from "../../../lib/palettes/"
import { SVGIcon } from "../../common/SVGIcon/client"
import { IconListBaseProps } from "../types"

const rainbowMonokai = getSafePaletteColors("rainbow", "rainbow monokai")

export const IconListBase = ({ lng }: IconListBaseProps) => {
	return (
		<IconListWrapper>
			<List>
				{iconsIds.map((id, idx) => (
					<IconItem key={"icon-with-id-" + id}>
						id: <Id>{id}</Id>
						<Icon
							style={{
								color: rainbowMonokai[idx % rainbowMonokai.length]
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

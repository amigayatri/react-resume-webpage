import { IconListWrapper, List, IconItem, Id, Icon } from "./IconList.styled"
import BaseElement from "../../../types/BaseElementProps.ts"
import { iconsIds } from "../../../constants/icons.ts"
import { rainbowMonokai } from "../../../constants/palettes/rainbow.ts"
import { SVGIcon } from "../../common/SVGIcon/client.tsx"

export const IconListBase = ({ lng }: BaseElement) => {
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

import { IconListWrapper, List, IconItem, Id, Icon } from "./IconList.styled"
import icons from "../../../constants/icons-map"
import SVGIcon from "../../../icons/SVGIcon"
import { rainbowMonokai } from "../../../themes/Monokai"

const IconList = () => {
	const iconsIds = Array.from(icons.keys())
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
							<SVGIcon local="iconlist" id={id} size={48} />
						</Icon>
					</IconItem>
				))}
			</List>
		</IconListWrapper>
	)
}

export default IconList

import { IconListWrapper, List, IconItem, Id, Icon } from "./IconList.styled"
import icons from "../../../constants/icons-map"
import SVGIcon from "../../../icons/SVGIcon"

const IconList = () => {
	const iconsIds = Array.from(icons.keys())
	console.log(iconsIds)
	return (
		<IconListWrapper>
			<List>
				{iconsIds.map((id) => (
					<IconItem key={"icon-with-id-" + id}>
						id: <Id>{id}</Id>
						<Icon>
							<SVGIcon id={id} size={48} />
						</Icon>
					</IconItem>
				))}
			</List>
		</IconListWrapper>
	)
}

export default IconList

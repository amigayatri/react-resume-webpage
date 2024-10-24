import SVGIcon from "../../../icons/SVGIcon"
import { ListWrapper, List, Item, Img } from "./RandomList.styled"

interface RandomListProps {
	list: string[]
	id: string
	iconId: string
	width: number
}

const RandomList = ({ list, id, width, iconId }: RandomListProps) => {
	return (
		<ListWrapper id={id + "-list"}>
			<SVGIcon size={64} id={iconId} />
			<List $width={width}>
				{list.map((url, idx) => (
					<Item key={id + "-idx-" + idx}>
						<Img src={url} />
					</Item>
				))}
			</List>
		</ListWrapper>
	)
}

export default RandomList

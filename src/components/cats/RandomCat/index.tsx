import { RandomCatWrapper } from "./RandomCat.styled"
import { Button, List, Item, Img } from "../Common.styled"
import AnimalAPI from "../../../api/Animals"
import { useState } from "react"
import SVGIcon from "../../../icons/SVGIcon"

const RandomCat = ({ api }: { api: AnimalAPI }) => {
	const list: string[] = []
	const [cats, setCats] = useState(list)
	return (
		<RandomCatWrapper>
			<Button
				onClick={() => {
					api.getCat().then((cat) => {
						const prevList = Array.from(cats)
						prevList.unshift(cat)
						setCats(prevList)
					})
				}}
			>
				<SVGIcon size={48} id="egyptiancat" />
				<SVGIcon size={48} id="cat" />
			</Button>
			<List>
				{cats.map((url, idx) => (
					<Item key={"cat-idx-" + idx}>
						<Img src={url} />
					</Item>
				))}
			</List>
		</RandomCatWrapper>
	)
}

export default RandomCat

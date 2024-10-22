import { RandomFoxWrapper } from "./RandomFox.styled"
import { useState } from "react"
import AnimalAPI from "../../../api/Animals"
import SVGIcon from "../../../icons/SVGIcon"
import { Button, Img, Item, List } from "../Common.styled"

const RandomFox = ({ api }: { api: AnimalAPI }) => {
	const list: string[] = []
	const [foxs, setFoxs] = useState(list)
	return (
		<RandomFoxWrapper>
			<Button
				onClick={() => {
					api.getFox().then((fox) => {
						const prevList = Array.from(foxs)
						prevList.unshift(fox)
						setFoxs(prevList)
					})
				}}
			>
				<SVGIcon size={48} id="fox" />
			</Button>
			<List>
				{foxs.map((url, idx) => (
					<Item key={"fox-idx-" + idx}>
						<Img src={url} />
					</Item>
				))}
			</List>
		</RandomFoxWrapper>
	)
}

export default RandomFox

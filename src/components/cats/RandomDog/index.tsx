import { useState } from "react"
import AnimalAPI from "../../../api/Animals"
import SVGIcon from "../../../icons/SVGIcon"
import { Img, Item } from "../Common.styled"
import { RandomDogWrapper, DogList, DogButton } from "./RandomDog.styled"

const RandomDog = ({ api }: { api: AnimalAPI }) => {
	const list: string[] = []
	const [dogs, setDogs] = useState(list)
	return (
		<RandomDogWrapper>
			<DogButton
				onClick={() => {
					api.getDog().then((dog) => {
						const prevList = Array.from(dogs)
						prevList.unshift(dog)
						setDogs(prevList)
					})
				}}
			>
				<SVGIcon size={48} id="dog" />
			</DogButton>
			<DogList>
				{dogs.map((url, idx) => (
					<Item key={"dog-idx-" + idx}>
						<Img src={url} />
					</Item>
				))}
			</DogList>
		</RandomDogWrapper>
	)
}

export default RandomDog

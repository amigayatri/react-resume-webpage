import { MainWrapper } from "./Main.styled"
import RandomCat from "../RandomCat"
import RandomDog from "../RandomDog"
import RandomFox from "../RandomFox"
import AnimalAPI from "../../../api/Animals"

const Main = () => {
	const api = new AnimalAPI()
	return (
		<MainWrapper>
			<RandomCat api={api} />
			<RandomDog api={api} />
			<RandomFox api={api} />
		</MainWrapper>
	)
}

export default Main

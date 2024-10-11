import { MainWrapper } from "./Main.styled"
import VisitorStats from "../VisitorStats"
import GitStats from "../Git"

const Main = () => {
	return (
		<MainWrapper>
			<VisitorStats />
			<GitStats />
		</MainWrapper>
	)
}

export default Main

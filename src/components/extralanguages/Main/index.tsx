import extraLanguages from "../../../constants/extra-languages"
import { MainWrapper, ExtraLanguages } from "./Main.styled"
import Description from "../Description"
import languages from "../../../constants/languages"

const allLang = languages.concat(extraLanguages)

const Main = () => {
	return (
		<MainWrapper>
			<Description />
			<ExtraLanguages languages={allLang} isExtra />
			<></>
		</MainWrapper>
	)
}

export default Main

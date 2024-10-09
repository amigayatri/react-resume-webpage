import ProgrammingLanguageProps from "../../../../types/ProgrammingLanguageProps"
import { LanguageItemWrapper, Item, Count } from "./LanguageItem.styled"
import ProgrammingIcons from "./ProgrammingIcons"

interface LangProp {
	lang: ProgrammingLanguageProps
	max: number
}

const LanguageItem = ({ lang, max }: LangProp) => {
	const size = lang.problemsSolved / max
	const iconSize = Math.ceil(size * 96) < 16 ? 16 : Math.ceil(size * 96)
	const fontSize = 2 * size < 1 ? 1 : 2 * size
	return (
		<LanguageItemWrapper $iconSize={iconSize} $fontSize={fontSize}>
			<Item>
				<ProgrammingIcons id={lang.languageName} size={iconSize} />
				<Count>{lang.problemsSolved}</Count>
			</Item>
		</LanguageItemWrapper>
	)
}

export default LanguageItem

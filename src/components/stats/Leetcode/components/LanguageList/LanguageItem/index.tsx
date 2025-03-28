import { LanguageItemWrapper, Item, Count } from "./LanguageItem.styled"
import { ProgrammingIcons } from "./ProgrammingIcons"
import { LanguageItemProps } from "../../../types"

export const LanguageItem = ({ lang, max }: LanguageItemProps) => {
	const size = lang.problemsSolved / max
	const iconSize = Math.ceil(size * 96) < 16 ? 16 : Math.ceil(size * 96)
	const fontSize = 2 * size < 1 ? 1 : 2 * size
	return (
		<LanguageItemWrapper tabIndex={0} $iconSize={iconSize} $fontSize={fontSize}>
			<Item>
				<ProgrammingIcons id={lang.languageName} size={iconSize} />
				<Count>{lang.problemsSolved}</Count>
			</Item>
		</LanguageItemWrapper>
	)
}

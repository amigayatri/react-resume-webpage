import { VerseProps } from "../../types"
import { VerseWrapper, ChorusWrapper, Line } from "./Verse.styled"
import { VerseIcons } from "../VerseIcons"

export const Verse = ({ verse, idx, t, lng, accentColor }: VerseProps) => {
	const { isChorus, icons, key, lines } = verse
	const Wrapper = isChorus ? ChorusWrapper : VerseWrapper
	return (
		<Wrapper
			id={key}
			key={key}
			$accentColor={accentColor === "" ? undefined : accentColor}
		>
			<VerseIcons
				accentColor={accentColor}
				lng={lng}
				icons={icons}
				idx={idx}
				isChorus={isChorus}
				t={t}
			/>
			{lines.map((line, lineIdx) => {
				const key = `verse-${idx}-line-${lineIdx}`
				return (
					<Line id={key} key={key}>
						{line}
					</Line>
				)
			})}
		</Wrapper>
	)
}

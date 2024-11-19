import { LyricProps } from "../../types"
import { wrapperId, playing } from "../../constants"
import {
	LyricWrapper,
	PlayingOffset,
	LyricContentWrapper
} from "./Lyric.styled"
import { Loading } from "../../../../../common"
import { Verse } from "../Verse"

export const Lyric = ({
	lyric,
	playingState,
	t,
	lng,
	accentColor,
	isDark
}: LyricProps) => {
	if (lyric.length === 0) {
		return (
			<LyricWrapper id={wrapperId}>
				<Loading notFullPage type="pacman" />
			</LyricWrapper>
		)
	}
	return (
		<LyricWrapper $accentColor={isDark ? accentColor.dark : accentColor.light}>
			<LyricContentWrapper
				$accentColor={isDark ? accentColor.dark : accentColor.light}
				id={wrapperId}
			>
				{playingState === playing && <PlayingOffset />}
				{lyric.map((verse, idx) => (
					<Verse
						isDark={isDark}
						key={verse.key}
						accentColor={accentColor}
						verse={verse}
						idx={idx}
						lng={lng}
						t={t}
					/>
				))}
			</LyricContentWrapper>
		</LyricWrapper>
	)
}

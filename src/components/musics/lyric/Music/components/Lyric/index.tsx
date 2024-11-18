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
	accentColor
}: LyricProps) => {
	if (lyric.length === 0) {
		return (
			<LyricWrapper id={wrapperId}>
				<Loading notFullPage type="pacman" />
			</LyricWrapper>
		)
	}
	return (
		<LyricWrapper>
			<LyricContentWrapper
				$accentColor={accentColor === "" ? undefined : accentColor}
				id={wrapperId}
			>
				{playingState === playing && <PlayingOffset />}
				{lyric.map((verse, idx) => (
					<Verse
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

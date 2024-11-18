import { SVGIcon } from "../../../../../common/client"
import { VerseIconsProps } from "../../types"
import { Icon, IconList } from "./VerseIcons.styled"

export const VerseIcons = ({ lng, icons, idx, isChorus }: VerseIconsProps) => {
	return (
		<IconList>
			{icons.map((iconId, iconIdx) => (
				<Icon key={`verse-${idx}-icon-${iconIdx}`}>
					<SVGIcon
						color="currentColor"
						lng={lng}
						id={iconId}
						size={isChorus ? 80 : 64}
						local="lyric"
					/>
				</Icon>
			))}
		</IconList>
	)
}

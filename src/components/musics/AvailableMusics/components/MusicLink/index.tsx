import { useState } from "react"
import { MusicLinkProps } from "../../../types"
import { Link, MusicButton } from "./MusicLink.styled"
import { createSafeAccentPair } from "../../../../../lib/colors"
import { SVGIcon } from "../../../../common/client"

export const MusicLink = ({ lng, info, path, isDark }: MusicLinkProps) => {
	const [name, icon, rawAccent] = info
	const [accentColor] = useState(createSafeAccentPair(rawAccent))
	return (
		<Link key={path} href={`/${lng}/musics/${path}`}>
			<MusicButton $accentColor={isDark ? accentColor.dark : accentColor.light}>
				<SVGIcon
					color="currentColor"
					lng={lng}
					id={icon}
					size={80}
					local="lyric"
				/>
				{name}
			</MusicButton>
		</Link>
	)
}

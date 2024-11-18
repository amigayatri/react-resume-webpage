import {
	Title,
	MusicButton,
	MusicList,
	Link,
	ListTitle,
	AvailableMusicsWrapper
} from "./AvailableMusics.styled"
import { AvailableMusicsBaseProps } from "../types"
import {
	availableMusicsNames,
	availableMusicIcons
} from "../../../constants/musics"
import { SVGIcon } from "../../common/client"

export const AvailableMusicsBase = ({ t, lng }: AvailableMusicsBaseProps) => {
	console.log(availableMusicsNames)
	const musics = Array.from(availableMusicsNames.entries())
	const icons = Array.from(availableMusicIcons.values())
	return (
		<AvailableMusicsWrapper>
			<Title>{t("title")}</Title>
			<ListTitle>{t("list.title")}</ListTitle>
			<MusicList>
				{musics.map(([path, name], idx) => (
					<Link key={path} href={path}>
						<MusicButton>
							<SVGIcon
								color="currentColor"
								lng={lng}
								id={icons[idx]}
								size={80}
								local="lyric"
							/>
							{name}
						</MusicButton>
					</Link>
				))}
			</MusicList>
		</AvailableMusicsWrapper>
	)
}

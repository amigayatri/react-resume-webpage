import {
	Title,
	MusicButton,
	MusicList,
	Link,
	ListTitle,
	AvailableMusicsWrapper
} from "./AvailableMusics.styled"
import { AvailableMusicsBaseProps } from "../types"
import { getAllAvailableMusics } from "../../../lib/musics"
import { SVGIcon } from "../../common/client"

export const AvailableMusicsBase = ({ t, lng }: AvailableMusicsBaseProps) => {
	const musics = getAllAvailableMusics()
	return (
		<AvailableMusicsWrapper>
			<Title>{t("title")}</Title>
			<ListTitle>{t("list.title")}</ListTitle>
			<MusicList>
				{musics.map(([path, info]) => {
					const [name, icon] = info
					return (
						<Link key={path} href={`/${lng}/musics/${path}`}>
							<MusicButton>
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
				})}
			</MusicList>
		</AvailableMusicsWrapper>
	)
}

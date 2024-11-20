import {
	Title,
	MusicList,
	AvailableMusicsWrapper
} from "./AvailableMusics.styled"
import { AvailableMusicsBaseProps } from "../types"
import { getAllAvailableMusics } from "../../../lib/musics"
import { MusicLink } from "./components"
import { useEffect, useState } from "react"
import { useTheme } from "styled-components"

export const AvailableMusicsBase = ({ t, lng }: AvailableMusicsBaseProps) => {
	const musics = getAllAvailableMusics()
	const theme = useTheme()
	const { almostBlack } = theme
	const [isDark, setIsDark] = useState(theme.background === almostBlack)
	useEffect(() => {
		setIsDark(theme.background === almostBlack)
	}, [theme.background])
	return (
		<AvailableMusicsWrapper>
			<Title>{t("title")}</Title>
			<MusicList>
				{musics.map(([path, info]) => {
					return (
						<MusicLink
							path={path}
							info={info}
							t={t}
							lng={lng}
							isDark={isDark}
						/>
					)
				})}
			</MusicList>
		</AvailableMusicsWrapper>
	)
}

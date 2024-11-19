import { ElementProps, BaseElementProps } from "../../../types/common"
import { musicName, musicPath, musicAccentColor } from "../../../types/musics"

export interface MusicElementProps extends ElementProps {
	accentColor: musicAccentColor
	isDark: boolean
}

export interface MusicBaseElement extends MusicElementProps {}
export interface MusicBaseElement extends BaseElementProps {}
export interface MusicMainProps extends ElementProps {
	name: musicName
	path: musicPath
}

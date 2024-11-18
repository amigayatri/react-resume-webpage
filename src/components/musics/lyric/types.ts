import { ElementProps, BaseElementProps } from "../../../types/common"
import { musicName, musicPath } from "../../../types/musics"

interface MusicElementProps extends ElementProps {
	name: musicName
	path: musicPath
}

export interface LyricProps extends MusicElementProps {}
export interface LyricBaseProps extends BaseElementProps {}
export interface LyricBaseProps extends LyricProps {}
export interface MusicMainProps extends MusicElementProps {}

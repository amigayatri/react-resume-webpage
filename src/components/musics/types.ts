import { ElementProps, BaseElementProps } from "../../types/common"
import { MusicInfo } from "../../types/musics"
export type { MusicInfo }

export interface AvailableMusicsProps extends ElementProps {}
export interface AvailableMusicsBaseProps extends BaseElementProps {}
export interface AvailableMusicsBaseProps extends AvailableMusicsProps {}
export interface MusicLinkProps extends BaseElementProps {
	info: MusicInfo
	path: string
	isDark: boolean
}
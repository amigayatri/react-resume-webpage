import { iconKey } from "../types/common"
import { musicName, musicPath } from "../types/musics"
type namesMap = Map<musicPath, musicName>
export const availableMusicsNames: namesMap = new Map([
	["o-mar-serenou", "O Mar Serenou"]
])
type iconsMap = Map<musicPath, iconKey>
export const availableMusicIcons: iconsMap = new Map([
	["o-mar-serenou", "mermaid"]
])

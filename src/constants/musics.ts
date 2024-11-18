import { musicName, musicPath } from "../types/musics"
type namesMap = Map<musicPath, musicName>
export const availableMusicsNames: namesMap = new Map([
	["o-mar-serenou", "O Mar Serenou"]
])

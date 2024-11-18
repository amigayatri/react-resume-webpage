import { MusicInfo, musicPath } from "../../types/musics"

type infoMap = Map<musicPath, MusicInfo>
const musicInfoMap: infoMap = new Map([
	["o-mar-serenou", ["O Mar Serenou", "mermaid", "#67d8ef"]]
])

type getMusicInfo = (path: musicPath) => MusicInfo | [false]
const getMusicInfo: getMusicInfo = (path) => {
	const info = musicInfoMap.get(path)
	if (info === undefined) return [false]
	return info
}

type getAllAvailableMusics = () => [musicPath, MusicInfo][]
const getAllAvailableMusics: getAllAvailableMusics = () => {
	return Array.from(musicInfoMap.entries())
}

export { getMusicInfo, getAllAvailableMusics }

import { MainBase } from "../../../common/Main/MainBase.tsx"
import { Music } from "../Music/client.tsx"
import { MusicMainProps } from "../types"
import { getMusicInfo } from "../../../../lib/musics/"

export const Main = async (props: MusicMainProps) => {
	const { lng, path } = props
	const info = getMusicInfo(path)
	return (
		<MainBase lng={lng}>
			<Music baseAccent={info[0] !== false ? info[2] : ""} {...props} />
		</MainBase>
	)
}

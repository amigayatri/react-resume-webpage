import { MainBase } from "../../../common/Main/MainBase.tsx"
import { Lyric } from "../Lyric/client.tsx"
import { MusicMainProps } from "../types"

export const Main = async (props: MusicMainProps) => {
	const { lng } = props
	return (
		<MainBase lng={lng}>
			<Lyric {...props} />
		</MainBase>
	)
}

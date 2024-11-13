import { ElementProps } from "../../../types/common/"
import { PalettesList } from "../PalettesList/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<PalettesList lng={lng} />
		</MainBase>
	)
}

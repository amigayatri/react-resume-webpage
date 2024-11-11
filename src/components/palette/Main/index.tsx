import Element from "../../../types/common/ElementProps.ts"
import { PalettesList } from "../PalettesList/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<PalettesList lng={lng} />
		</MainBase>
	)
}

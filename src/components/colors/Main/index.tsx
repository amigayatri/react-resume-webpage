import Element from "../../../types/common/ElementProps.ts"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { ShadeGenerator } from "../ShadeGenerator/client.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<ShadeGenerator lng={lng} />
		</MainBase>
	)
}

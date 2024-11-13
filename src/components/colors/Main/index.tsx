import { ElementProps } from "../../../types/common/"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { ShadeGenerator } from "../ShadeGenerator/client.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<ShadeGenerator lng={lng} />
		</MainBase>
	)
}

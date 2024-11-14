import { ElementProps } from "../../../../types/common/"
import { MainBase } from "../../../common/Main/MainBase.tsx"
import { ShadeGenerator } from "../components/client"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<ShadeGenerator lng={lng} />
		</MainBase>
	)
}

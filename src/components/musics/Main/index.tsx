import { ElementProps } from "../../../types/common/"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { AvailableMusics } from "../AvailableMusics/client"
export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<AvailableMusics lng={lng} />
		</MainBase>
	)
}

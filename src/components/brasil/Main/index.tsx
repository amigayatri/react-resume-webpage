import { ElementProps } from "../../../types/common/"
import { BrazilianMap } from "../BrazilianMap/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<BrazilianMap lng={lng} />
		</MainBase>
	)
}

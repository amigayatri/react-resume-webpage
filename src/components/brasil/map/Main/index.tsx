import { ElementProps } from "../../../../types/common/"
import { BrazilianMap } from "../components"
import { MainBase } from "../../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng} customStyle={{ paddingLeft: 0, paddingRight: 0 }}>
			<BrazilianMap lng={lng} />
		</MainBase>
	)
}

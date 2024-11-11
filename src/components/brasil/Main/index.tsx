import Element from "../../../types/common/ElementProps.ts"
import { BrazilianMap } from "../BrazilianMap/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<BrazilianMap lng={lng} />
		</MainBase>
	)
}

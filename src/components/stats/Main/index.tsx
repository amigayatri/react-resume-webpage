import Element from "../../../types/common/ElementProps.ts"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { Stats } from "../Stats/client.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<Stats lng={lng} />
		</MainBase>
	)
}

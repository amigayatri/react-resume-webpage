import Element from "../../../types/common/ElementProps.ts"
import { Description } from "../Description/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<Description lng={lng} />
		</MainBase>
	)
}

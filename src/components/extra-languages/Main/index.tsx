import { ElementProps } from "../../../types/common/"
import { Description } from "../Description/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<Description lng={lng} />
		</MainBase>
	)
}

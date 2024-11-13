import { MainBase } from "../../common/Main/MainBase.tsx"
import { Stats } from "../Stats/client.tsx"
import { ElementProps } from "../../../types/common/"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<Stats lng={lng} />
		</MainBase>
	)
}

import { ElementProps } from "../../../types/common/"
import { BrasilList } from "../components/"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<BrasilList lng={lng} />
		</MainBase>
	)
}

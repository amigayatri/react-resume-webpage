import { ElementProps } from "../../../types/common/"
import { ColorsList } from "../components/"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<ColorsList lng={lng} />
		</MainBase>
	)
}

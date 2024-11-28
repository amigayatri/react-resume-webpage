import { ElementProps } from "../../../types/common/"
import { MainBase } from "../../common/Main/MainBase"
import { IconList } from "../components/"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<IconList lng={lng} />
		</MainBase>
	)
}

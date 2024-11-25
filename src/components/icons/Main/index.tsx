import { ElementProps } from "../../../types/common/"
import { MainBase } from "../../common/Main/MainBase"
import { IconList, Hero } from "../components/"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<Hero lng={lng} />
			<IconList lng={lng} />
		</MainBase>
	)
}

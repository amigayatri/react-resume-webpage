import { ElementProps } from "../../../types/common/"
import { HomeList } from "../HomeList/"
import { Hero } from "../Hero/"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<Hero lng={lng} />
			<HomeList lng={lng} />
		</MainBase>
	)
}

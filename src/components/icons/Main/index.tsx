import { ElementProps } from "../../../types/common/"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { IconList } from "../IconList/client"
import { Hero } from "../Hero/client.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<Hero lng={lng} />
			<IconList lng={lng} />
		</MainBase>
	)
}

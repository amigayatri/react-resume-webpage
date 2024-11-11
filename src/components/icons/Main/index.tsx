import Element from "../../../types/common/ElementProps.ts"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { IconList } from "../IconList/"
import { Hero } from "../Hero/client.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<Hero lng={lng} />
			<IconList lng={lng} />
		</MainBase>
	)
}

import Element from "../../../types/common/ElementProps.ts"
import { Hero } from "../Hero/client.tsx"
import { Holidays } from "../Holidays/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<Hero lng={lng} />
			<Holidays lng={lng} />
		</MainBase>
	)
}

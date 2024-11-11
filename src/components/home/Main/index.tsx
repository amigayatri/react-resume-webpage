import Element from "../../../types/common/ElementProps.ts"
import { PageList } from "../PageList/"
import { Hero } from "../Hero/"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<Hero lng={lng} />
			<PageList lng={lng} />
		</MainBase>
	)
}

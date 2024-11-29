import { ElementProps } from "../../../../types/common/"
import { Hero, Holidays } from "../components/"
import { MainBase } from "../../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase customStyle={{ paddingBottom: 0 }} lng={lng}>
			<Hero lng={lng} />
			<Holidays lng={lng} />
		</MainBase>
	)
}

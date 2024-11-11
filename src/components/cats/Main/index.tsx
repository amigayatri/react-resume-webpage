import Element from "../../../types/common/ElementProps.ts"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { AnimalList } from "../AnimalList/client.tsx"

export const Main = async ({ lng }: Element) => {
	return (
		<MainBase lng={lng}>
			<AnimalList lng={lng} />
		</MainBase>
	)
}

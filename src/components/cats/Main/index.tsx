import { ElementProps } from "../../../types/common/"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { AnimalList } from "../components/client.tsx"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<AnimalList lng={lng} />
		</MainBase>
	)
}

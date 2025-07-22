import { ElementProps } from "../../../types/common/"
import { MainBase } from "../../common/Main/MainBase"
import { SimpleAuth } from "../components"

export const Main = async ({ lng }: ElementProps) => {
	return (
		<MainBase lng={lng}>
			<SimpleAuth lng={lng} />
		</MainBase>
	)
}

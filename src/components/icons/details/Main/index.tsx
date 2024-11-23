import { MainBase } from "../../../common/Main/MainBase.tsx"
import { MainProps } from "../types.ts"
import { DetailedIcon } from "../DetailedIcon/client.tsx"
import { iconKey } from "../../../../icons/types.ts"

export const Main = async ({ lng, iconId }: MainProps) => {
	return (
		<MainBase lng={lng}>
			<DetailedIcon lng={lng} iconId={iconId as iconKey} />
		</MainBase>
	)
}

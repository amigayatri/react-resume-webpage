import { ControlsBaseProps } from "../types"
import { ControlsWrapper } from "./Controls.styled"
import { Filter, Size } from "./components"

export const ControlsBase = ({
	t,
	lng,
	handleGroups,
	handleSize,
	size
}: ControlsBaseProps) => {
	return (
		<ControlsWrapper>
			<Filter t={t} lng={lng} handleGroups={handleGroups} />
			<Size handleSize={handleSize} size={size} lng={lng} t={t} />
		</ControlsWrapper>
	)
}

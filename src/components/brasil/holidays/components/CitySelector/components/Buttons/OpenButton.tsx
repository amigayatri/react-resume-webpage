import { Button, OpenText } from "./Buttons.styled"
import { OpenButtonProps } from "../types"
import { SVGIcon } from "../../../../../../common/client"

export const OpenButton = ({ openState, lng, t }: OpenButtonProps) => {
	const [open, setOpen] = openState
	return (
		<Button onClick={() => setOpen(!open)}>
			<SVGIcon lng={lng} local="holidays" size={32} id="map" />
			<OpenText>{t(`open.${open}`)}</OpenText>
		</Button>
	)
}

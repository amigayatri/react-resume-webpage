import { Button, OpenText } from "./Buttons.styled"
import { AddButtonProps } from "../types"
import { SVGIcon } from "../../../../../../common/client"
import { unsetValue } from "../constants"

export const AddButton = ({
	lng,
	t,
	cityName,
	stateName,
	handleAdd
}: AddButtonProps) => {
	if (cityName === unsetValue || stateName === unsetValue) return
	return (
		<Button onClick={() => handleAdd()}>
			<SVGIcon lng={lng} local="holidays" size={32} id="calendar" />
			<OpenText>
				{t("addMunicipal", {
					stateName,
					cityName
				})}
			</OpenText>
		</Button>
	)
}

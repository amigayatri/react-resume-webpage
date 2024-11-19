import { ButtonWrapper } from "./AddButtons.styled.ts"
import { Button } from "../Common.styled.ts"
import { SVGIcon } from "../../../common/client"
import { animalsIcons, numbers } from "../../../../constants/animals.ts"
import { AddButtonsProps } from "../types.ts"
import { iconKey } from "../../../../icons/"

export const AddButtons = ({
	t,
	lng,
	controls,
	handleAdd
}: AddButtonsProps) => {
	const { count } = controls
	const plusplus: { iconId: iconKey; size: number }[] =
		count > 1
			? [
					{ iconId: "plus", size: 24 },
					{ iconId: "equal", size: 24 },
					{ iconId: numbers[count], size: 36 }
			  ]
			: [{ iconId: "plusplus", size: 48 }]
	return (
		<ButtonWrapper id="buttons-wrapper">
			{animalsIcons.map(([id, icons]) => {
				const animalName =
					count > 1 ? t(`list.${id}.more`) : t(`list.${id}.one`)
				return (
					<Button
						aria-label={t("button", {
							animalName,
							animalCount: count
						})}
						id={id + "-button"}
						key={"button-animal-" + id}
						onClick={() => handleAdd(id)}
					>
						{icons.map((iconId) => (
							<SVGIcon
								lng={lng}
								local="cats"
								key={`button-${id}-${iconId}`}
								id={iconId}
								size={48}
							/>
						))}
						{plusplus.map(({ iconId, size }, idx) => (
							<SVGIcon
								lng={lng}
								local="cats"
								key={`button-${id}-${iconId}-${idx}`}
								size={size}
								id={iconId}
							/>
						))}
					</Button>
				)
			})}
		</ButtonWrapper>
	)
}

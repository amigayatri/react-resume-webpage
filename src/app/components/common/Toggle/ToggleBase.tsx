import { ToggleWrapper } from "./Toggle.styled"
import { TFunction } from "i18next"
import { ToggleProps } from "../../../types/ToggleProps.ts"
import { SVGIcon } from "../SVGIcon/client"

interface ToggleBaseProps extends ToggleProps {
	t: TFunction<any, undefined>
}

export const ToggleBase = ({
	ariaLabel,
	stateChangeFN,
	state,
	icon,
	lng
}: ToggleBaseProps) => {
	return (
		<ToggleWrapper
			tabIndex={0}
			aria-label={ariaLabel}
			onClick={stateChangeFN}
			onKeyDown={(e) => e.key === "enter" && stateChangeFN()}
		>
			{icon.shouldChange ? (
				<SVGIcon
					lng={lng}
					local="toggle"
					size={16}
					id={
						state === icon.trueValAsStr ? icon.options.true : icon.options.false
					}
				/>
			) : (
				<SVGIcon local="toggle" lng={lng} size={16} id={icon.id} />
			)}
		</ToggleWrapper>
	)
}

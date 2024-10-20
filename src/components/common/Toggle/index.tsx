import { ToggleWrapper } from "./Toggle.styled"
import SVGIcon from "../../../icons/SVGIcon"
import ToggleProps from "../../../types/ToggleProps"

const Toggle = ({ state, icon, stateChangeFN, ariaLabel }: ToggleProps) => {
	return (
		<ToggleWrapper
			tabIndex={0}
			aria-label={ariaLabel}
			onClick={() => stateChangeFN()}
			onKeyDown={(e) => e.key === "enter" && stateChangeFN()}
		>
			{icon.shouldChange ? (
				<SVGIcon
					toggle
					size={16}
					id={
						state === icon.trueValAsStr ? icon.options.true : icon.options.false
					}
				/>
			) : (
				<SVGIcon toggle size={16} id={icon.id} />
			)}
		</ToggleWrapper>
	)
}

export default Toggle

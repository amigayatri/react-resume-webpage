import { ToggleWrapper, Wrapper, Label } from "./Toggle.styled"
import { ToggleProps, BaseElementProps } from "../../../types/common/"
import { SVGIcon } from "../client"

interface ToggleBaseProps extends ToggleProps {}
interface ToggleBaseProps extends BaseElementProps {}

export const ToggleBase = ({
	label,
	stateChangeFN,
	state,
	icon,
	customColor,
	alwaysDark,
	showLabel,
	size,
	lng
}: ToggleBaseProps) => {
	return (
		<Wrapper
			tabIndex={0}
			aria-label={label}
			onClick={() => {
				stateChangeFN()
			}}
			onKeyDown={(e) => e.key === "enter" && stateChangeFN()}
		>
			<ToggleWrapper
				$size={size}
				$darkBg={alwaysDark === true}
				$customColor={customColor}
			>
				<SVGIcon
					lng={lng}
					local="toggle"
					size={size}
					id={
						icon.shouldChange
							? state === icon.trueValAsStr
								? icon.options.true
								: icon.options.false
							: icon.id
					}
					isTrue={state === icon.trueValAsStr}
				/>
				)
			</ToggleWrapper>
			{showLabel === true && (
				<Label $customColor={customColor}>{label}</Label>
			)}
		</Wrapper>
	)
}

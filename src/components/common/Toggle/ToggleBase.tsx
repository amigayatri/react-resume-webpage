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
				console.log(state)
				stateChangeFN()
			}}
			onKeyDown={(e) => e.key === "enter" && stateChangeFN()}
		>
			<ToggleWrapper
				$size={size}
				$darkBg={alwaysDark === true}
				$customColor={customColor}
			>
				{icon.shouldChange ? (
					<SVGIcon
						lng={lng}
						local="toggle"
						size={size}
						id={
							state === icon.trueValAsStr
								? icon.options.true
								: icon.options.false
						}
						isTrue={state === icon.trueValAsStr}
					/>
				) : (
					<SVGIcon
						local="toggle"
						lng={lng}
						size={size}
						id={icon.id}
					/>
				)}
			</ToggleWrapper>
			{showLabel === true && (
				<Label $customColor={customColor}>{label}</Label>
			)}
		</Wrapper>
	)
}

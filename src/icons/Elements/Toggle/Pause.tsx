import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const PauseIcon = (props: SVGProps) => {
	const {
		alt,
		size,
		isToggle,
		hasTransition,
		color,
		rotationDeg,
		isResponsive,
		customStyle
	} = props
	const safeWrapperStyle =
		customStyle !== undefined && customStyle.wrapper !== undefined
			? customStyle.wrapper
			: {}
	const safeIconStyle =
		customStyle !== undefined && customStyle.icon !== undefined
			? customStyle.icon
			: {}
	if (isToggle === true) {
		return (
			<ToggleIconWrapper $isTrue>
				<Icon
					$isResponsive={false}
					$hasTransition={hasTransition}
					$size={size}
					role="img"
					fill={color}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<title>{alt}</title>
					<path d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z"></path>
				</Icon>
			</ToggleIconWrapper>
		)
	}
	return (
		<IconWrapper
			style={safeWrapperStyle}
			$isResponsive={isResponsive}
			$angle={rotationDeg}
		>
			<Icon
				style={safeIconStyle}
				$isResponsive={isResponsive}
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				fill={color}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<title>{alt}</title>
				<path d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z"></path>
			</Icon>
		</IconWrapper>
	)
}

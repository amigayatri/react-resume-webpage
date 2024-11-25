import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const PlayIcon = (props: SVGProps) => {
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
			<ToggleIconWrapper>
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
					<path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path>{" "}
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
				<path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path>{" "}
			</Icon>
		</IconWrapper>
	)
}

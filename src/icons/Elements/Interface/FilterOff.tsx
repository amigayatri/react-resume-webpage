import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const FilterOffIcon = (props: SVGProps) => {
	const {
		alt,
		size,
		isTrue,
		hasTransition,
		isToggle,
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

	const Wrapper = isToggle === true ? ToggleIconWrapper : IconWrapper
	return (
		<Wrapper
			style={safeWrapperStyle}
			$isResponsive={isResponsive}
			$angle={rotationDeg}
			$isTrue={isTrue}
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
				<path d="M6.92893 0.514648L21.0711 14.6568L19.6569 16.071L15.834 12.2486L14 14.9999V21.9999H10V14.9999L4 5.99993H3V3.99993L7.585 3.99965L5.51472 1.92886L6.92893 0.514648ZM21 3.99993V5.99993H20L18.085 8.87193L13.213 3.99993H21Z" />
			</Icon>
		</Wrapper>
	)
}

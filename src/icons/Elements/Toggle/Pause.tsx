import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

	const { alt, size, isToggle, hasTransition, color } = props
	if (isToggle === true) {
		return (
			<ToggleIconWrapper $isTrue>
				<Icon
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
		<IconWrapper>
			<Icon
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
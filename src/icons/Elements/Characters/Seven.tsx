import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				fill={color}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-10 0 48 48"
			>
				<title>{alt}</title>
				<path
					fill={color}
					d="M 9.335 44 L 6.052 43.021 L 21.66 7.168 L 2.74 7.168 L 2.74 4 L 25.26 4 L 25.26 6.966 L 9.335 44 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}
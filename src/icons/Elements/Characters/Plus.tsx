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
				viewBox="0 0 48 48"
			>
				<title>{alt}</title>
				<path
					fill={color}
					d="M 26.667 4.066 L 26.667 21.622 L 44 21.622 L 44 26.555 L 26.667 26.555 L 26.667 43.933 L 21.111 43.933 L 21.111 26.555 L 4 26.555 L 4 21.622 L 21.111 21.622 L 21.111 4.066 L 26.667 4.066 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}
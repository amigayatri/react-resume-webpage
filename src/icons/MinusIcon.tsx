import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const MinusIcon = (props: SVGProps) => {
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
					d="M -6 26.967 L -6 21.033 L 34 21.033 L 34 26.967 L -6 26.967 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default MinusIcon

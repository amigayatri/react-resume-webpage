import { IconWrapper, Icon } from "../SVGIcon.styled"
import SVGProps from "../../../../types/common/SVGProps"

//Comment icon name (and pack if it changes)
export const MinusMinusIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				fill={color}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-842 0 48 48"
			>
				<title>{alt}</title>
				<path
					fill={color}
					d="M -815.837 25.394 L -815.837 22.606 L -798 22.606 L -798 25.394 L -815.837 25.394 Z M -838 25.394 L -838 22.606 L -820.163 22.606 L -820.163 25.394 L -838 25.394 Z"
					id="object-0"
				/>
			</Icon>
		</IconWrapper>
	)
}

import { IconWrapper, Icon } from "../SVGIcon.styled"
import SVGProps from "../../../../types/common/SVGProps"

//Comment icon name (and pack if it changes)
export const MinusIcon = (props: SVGProps) => {
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

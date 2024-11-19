import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

//Comment icon name (and pack if it changes)
export const FilterIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
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
				<path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z"></path>
			</Icon>
		</IconWrapper>
	)
}

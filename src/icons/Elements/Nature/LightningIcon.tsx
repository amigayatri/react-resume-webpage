import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

//Comment icon name (and pack if it changes)
export const LightningIcon = (props: SVGProps) => {
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
				<path d="M13 10H20L11 23V14H4L13 1V10Z"></path>
			</Icon>
		</IconWrapper>
	)
}

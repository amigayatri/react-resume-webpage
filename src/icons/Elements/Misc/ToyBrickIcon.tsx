import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

//Comment icon name (and pack if it changes)
export const ToyBrickIcon = (props: SVGProps) => {
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
				<rect width="18" height="12" x="3" y="8" rx="1" />
				<path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
				<path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
			</Icon>
		</IconWrapper>
	)
}

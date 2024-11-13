import { IconWrapper, Icon } from "../SVGIcon.styled"
import { SVGProps } from "../../../../types/common/"

//Comment icon name (and pack if it changes)
export const PrismIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				fill="none"
				stroke={color}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<title>{alt}</title>
				<path d="M4.731 19h11.539a1 1 0 0 0 .866 -1.5l-5.769 -10a1 1 0 0 0 -1.732 0l-5.769 10a1 1 0 0 0 .865 1.5" />
				<path d="M2 13h4.45" />
				<path d="M18 5l-4.5 6" />
				<path d="M22 9l-7.75 3.25" />
				<path d="M22 15l-7 -1.5" />
			</Icon>
		</IconWrapper>
	)
}

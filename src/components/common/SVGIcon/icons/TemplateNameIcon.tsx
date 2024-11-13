import { IconWrapper, Icon } from "../SVGIcon.styled"
import { SVGProps } from "../../../../types/common/"

//Comment icon name (and pack if it changes)
export const TemplateNameIcon = (props: SVGProps) => {
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
			</Icon>
		</IconWrapper>
	)
}

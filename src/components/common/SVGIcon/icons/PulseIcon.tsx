import { IconWrapper, Icon } from "../SVGIcon.styled"
import SVGProps from "../../../../types/common/SVGProps"

//Comment icon name (and pack if it changes)
export const PulseIcon = (props: SVGProps) => {
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
				<path d="M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z"></path>
			</Icon>
		</IconWrapper>
	)
}
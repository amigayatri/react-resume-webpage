import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const MinusIcon = (props: SVGProps) => {
	const { size } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				role="img"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-10 0 48 48"
			>
				<title>-</title>
				<path
					fill="currentColor"
					d="M -6 26.967 L -6 21.033 L 34 21.033 L 34 26.967 L -6 26.967 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default MinusIcon

import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const SevenIcon = (props: SVGProps) => {
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
				<title>7</title>
				<path
					fill="currentColor"
					d="M 9.335 44 L 6.052 43.021 L 21.66 7.168 L 2.74 7.168 L 2.74 4 L 25.26 4 L 25.26 6.966 L 9.335 44 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default SevenIcon

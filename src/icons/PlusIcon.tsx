import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const PlusIcon = (props: SVGProps) => {
	const { size } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				role="img"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 48 48"
			>
				<title>+</title>
				<path
					fill="currentColor"
					d="M 26.667 4.066 L 26.667 21.622 L 44 21.622 L 44 26.555 L 26.667 26.555 L 26.667 43.933 L 21.111 43.933 L 21.111 26.555 L 4 26.555 L 4 21.622 L 21.111 21.622 L 21.111 4.066 L 26.667 4.066 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default PlusIcon

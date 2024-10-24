import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const MinusMinusIcon = (props: SVGProps) => {
	const { size } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				role="img"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-842 0 48 48"
			>
				<title>--</title>
				<path
					fill="currentColor"
					d="M -815.837 25.394 L -815.837 22.606 L -798 22.606 L -798 25.394 L -815.837 25.394 Z M -838 25.394 L -838 22.606 L -820.163 22.606 L -820.163 25.394 L -838 25.394 Z"
					id="object-0"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default MinusMinusIcon

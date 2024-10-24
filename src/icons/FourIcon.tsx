import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const FourIcon = (props: SVGProps) => {
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
				<title>4</title>
				<path
					fill="currentColor"
					d="M 13.109 4 L 16.038 5.378 L 5.184 31.021 L 26.663 31.021 L 26.663 34.007 L 1.336 34.007 L 1.336 31.251 L 13.109 4 Z M 21.207 19.334 L 21.207 44 L 17.761 44 L 17.761 31.94 L 18.278 19.334 L 21.207 19.334 Z"
					id="object-0"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default FourIcon

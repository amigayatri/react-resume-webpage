import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const OneIcon = (props: SVGProps) => {
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
				<title>1</title>
				<path
					fill="currentColor"
					d="M 17.071 4 L 17.071 42.836 L 13.374 42.836 L 13.374 8.163 L 3.912 13.869 L 2.311 11.22 L 13.927 4 L 17.071 4 Z M 25.688 40.885 L 25.688 44 L 3.475 44 L 3.475 40.885 L 25.688 40.885 Z"
					id="object-0"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default OneIcon

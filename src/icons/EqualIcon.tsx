import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

const EqualIcon = (props: SVGProps) => {
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
				<title>=</title>
				<path
					fill="currentColor"
					d="M 44 10.946 L 44 17.163 L 4 17.163 L 4 10.946 L 44 10.946 Z M 44 30.784 L 44 37.054 L 4 37.054 L 4 30.784 L 44 30.784 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default EqualIcon

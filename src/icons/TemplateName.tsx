import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const TemplateName = (props: SVGProps) => {
	const { color, alt, size } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
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

export default TemplateName

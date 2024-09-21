import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Windows-2 on Icon-pack
const WebsiteIcon = (props: SVGProps) => {
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
				<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 10H4V19H20V10ZM15 6V8H19V6H15Z"></path>
			</Icon>
		</IconWrapper>
	)
}

export default WebsiteIcon

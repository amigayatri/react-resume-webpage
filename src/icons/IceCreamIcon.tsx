import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const IceCreamIcon = (props: SVGProps) => {
	const { alt, size } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				role="img"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<title>{alt}</title>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M15 17H19V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V17H9V20C9 21.6569 10.3431 23 12 23C13.6569 23 15 21.6569 15 20V17ZM17 15V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V15H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V15H17Z"
					fill="currentColor"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default IceCreamIcon

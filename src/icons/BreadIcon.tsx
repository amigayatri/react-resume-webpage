import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const BreadIcon = (props: SVGProps) => {
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
				<path d="M1 7C1 4.79086 2.79086 3 5 3H7C4.79086 3 3 4.79086 3 7C3 8.48168 3.8052 9.77343 5 10.4646V19C5 20.6569 6.34315 22 8 22H6C4.34315 22 3 20.6569 3 19V10.4646C1.8052 9.77343 1 8.48168 1 7ZM8 22V20C7.44772 20 7 19.5523 7 19V9.12212L6.33325 8.88645C5.5551 8.61142 5 7.86925 5 7C5 5.89543 5.89543 5 7 5V3H19C21.2091 3 23 4.79086 23 7C23 8.48168 22.1948 9.77343 21 10.4646V19C21 20.6569 19.6569 22 18 22H8Z"></path>
			</Icon>
		</IconWrapper>
	)
}

export default BreadIcon
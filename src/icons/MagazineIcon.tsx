import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const MagazineIcon = (props: SVGProps) => {
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
				<path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM12 5V19H20V5H12ZM13 7H19V9H13V7ZM13 10H19V12H13V10Z"></path>
			</Icon>
		</IconWrapper>
	)
}

export default MagazineIcon
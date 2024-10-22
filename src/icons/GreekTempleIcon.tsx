import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const GreekTempleIcon = (props: SVGProps) => {
	const { alt, size } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				role="img"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<title>{alt}</title>
				<path d="M0 0h512v512H0z" fill="none" fillOpacity="1"></path>
				<g transform="translate(0,0)">
					<path
						d="M256 26.2L52 135h408L256 26.2zM73 153v14h366v-14H73zm16 32v206h30V185H89zm101.334 0v206h30V185h-30zm101.332 0v206h30V185h-30zM393 185v206h30V185h-30zM73 409v30h366v-30H73zm-32 48v30h430v-30H41z"
						fill="currentColor"
						fillOpacity="1"
					></path>
				</g>
			</Icon>
		</IconWrapper>
	)
}

export default GreekTempleIcon

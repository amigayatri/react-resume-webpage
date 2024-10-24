import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const MayanPyramidIcon = (props: SVGProps) => {
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
						d="M217 25v14h78V25h-78zm0 32v46h14V71h50v32h14V57h-78zm32 32v14h14V89h-14zm-64 32v46h30v-46h-30zm48 0v14h46v-14h-46zm64 0v46h30v-46h-30zm-64 32v14h46v-14h-46zm-80 32v46h62v-46h-62zm80 0v14h46v-14h-46zm64 0v46h62v-46h-62zm-64 32v14h46v-14h-46zm-112 32v46h94v-46h-94zm112 0v14h46v-14h-46zm64 0v46h94v-46h-94zm-64 32v14h46v-14h-46zM89 313v46h126v-46H89zm144 0v14h46v-14h-46zm64 0v46h126v-46H297zm-64 32v14h46v-14h-46zM57 377v46h158v-46H57zm176 0v14h46v-14h-46zm64 0v46h158v-46H297zm-64 32v14h46v-14h-46zM25 441v46h190v-46H25zm208 0v14h46v-14h-46zm64 0v46h190v-46H297zm-64 32v14h46v-14h-46z"
						fill="currentColor"
						fillOpacity="1"
					></path>
				</g>
			</Icon>
		</IconWrapper>
	)
}

export default MayanPyramidIcon

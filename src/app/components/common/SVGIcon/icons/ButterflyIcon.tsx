import { IconWrapper, Icon } from "../SVGIcon.styled"
import SVGProps from "../../../../types/SVGProps"

//Comment icon name (and pack if it changes)
export const ButterflyIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				fill={color}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<title>{alt}</title>
				<path d="M0 0h512v512H0z" fill="none"></path>
				<g transform="translate(0,0)">
					<path d="M222.97 43.094l-17.72 5.937c18.246 54.362 27.075 112.164 24.406 174.47l-.875 20.5 16.032-12.78c47.213-37.597 81.827-86.216 102.282-146.095l-17.688-6.063c-17.04 49.88-44.08 90.906-80.656 124.22.156-56.652-8.915-109.937-25.78-160.188zM53.812 51.22C51.09 160.79 110.03 244.245 208.75 273c2.573-110.1-55.144-193.608-154.938-221.78zm335.156 150.374c-58.436-.03-115.656 25.943-163.5 76.094 90.775 49.848 192.148 32.407 268.217-47.563-34.172-19.135-69.658-28.513-104.718-28.53zM136.936 277.03c-52.45.582-94.1 32.36-116.687 91.25 82.336 33.03 151.56 4.26 182.72-77.374-23.333-9.574-45.51-14.102-66.032-13.875zm81.97 19.47c-37.76 80.056-8.793 149.03 75.343 183.094 37.786-80.46 9.994-149.316-75.344-183.094z"></path>
				</g>
			</Icon>
		</IconWrapper>
	)
}
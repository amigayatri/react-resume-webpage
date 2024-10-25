import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const TwoIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				fill={color}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-10 0 48 48"
			>
				<title>{alt}</title>
				<path
					fill={color}
					d="M 13.67 4 C 16.005 4 18.02 4.469 19.714 5.407 C 21.408 6.345 22.72 7.637 23.648 9.284 C 24.576 10.93 25.041 12.816 25.041 14.94 C 25.041 16.816 24.715 18.649 24.064 20.439 C 23.414 22.229 22.37 24.105 20.934 26.067 C 19.499 28.03 17.627 30.202 15.321 32.586 C 13.014 34.969 10.195 37.683 6.864 40.726 L 25.96 40.726 L 25.471 44 L 2.844 44 L 2.844 40.813 C 5.926 37.865 8.539 35.29 10.683 33.088 C 12.827 30.887 14.588 28.958 15.967 27.302 C 17.345 25.646 18.417 24.139 19.183 22.78 C 19.949 21.42 20.48 20.119 20.777 18.874 C 21.073 17.63 21.222 16.309 21.222 14.912 C 21.222 12.5 20.547 10.604 19.197 9.226 C 17.848 7.848 15.995 7.159 13.641 7.159 C 11.554 7.159 9.87 7.498 8.587 8.178 C 7.304 8.858 6.003 9.944 4.682 11.437 L 2.04 9.341 C 3.629 7.465 5.337 6.106 7.166 5.263 C 8.994 4.421 11.162 4 13.67 4 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default TwoIcon

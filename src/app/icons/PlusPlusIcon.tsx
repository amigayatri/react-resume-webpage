import { IconWrapper, Icon } from "./Styles"
import SVGProps from "../types/SVGProps"

//Comment icon name (and pack if it changes)
const PlusPlusIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				fill={color}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-960 0 48 48"
			>
				<title>{alt}</title>
				<path
					fill={color}
					d="M -945.263 25.211 L -945.263 33.442 L -947.895 33.442 L -947.895 25.211 L -956 25.211 L -956 22.874 L -947.895 22.874 L -947.895 14.558 L -945.263 14.558 L -945.263 22.874 L -926.842 22.874 L -926.842 14.558 L -924.211 14.558 L -924.211 22.874 L -916 22.874 L -916 25.211 L -924.211 25.211 L -924.211 33.442 L -926.842 33.442 L -926.842 25.211 L -945.263 25.211 Z"
				/>
			</Icon>
		</IconWrapper>
	)
}

export default PlusPlusIcon

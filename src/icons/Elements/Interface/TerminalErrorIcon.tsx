import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

//Comment icon name (and pack if it changes)
export const TerminalErrorIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<title>{alt}</title>
				<path
					fill="#f7f7f7"
					d="M 10.559 10.8 L 1.76 19.599 L 0 17.839 L 7.04 10.8 L 0 3.76 L 1.76 2 L 10.559 10.8 Z M 10.559 19.511 L 24.004 19.511 L 24.004 22 L 10.559 22 L 10.559 19.511 Z"
				/>
				<path
					d="M 18 18 C 14.687 18 12 15.313 12 12 C 12 8.687 14.687 6 18 6 C 21.313 6 24 8.687 24 12 C 24 15.313 21.313 18 18 18 Z M 17.4 13.8 L 17.4 15 L 18.6 15 L 18.6 13.8 L 17.4 13.8 Z M 17.4 9 L 17.4 12.6 L 18.6 12.6 L 18.6 9 L 17.4 9 Z"
					fill={color}
				/>
			</Icon>
		</IconWrapper>
	)
}

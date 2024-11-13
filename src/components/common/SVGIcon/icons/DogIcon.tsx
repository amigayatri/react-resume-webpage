import { IconWrapper, Icon } from "../SVGIcon.styled"
import { SVGProps } from "../../../../types/common/"

//Comment icon name (and pack if it changes)
export const DogIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
			<Icon
				$size={size}
				$hasTransition={hasTransition}
				role="img"
				fill="none"
				stroke={color}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<title>{alt}</title>
				<path d="M11 5h2" />
				<path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" />
				<path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z" />
				<path d="M12 18v2" />
				<path d="M10 11v.01" />
				<path d="M14 11v.01" />
				<path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z" />
				<path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z" />
			</Icon>
		</IconWrapper>
	)
}

import { IconWrapper, Icon } from "../SVGIcon.styled"
import SVGProps from "../../../../types/common/SVGProps"

//Comment icon name (and pack if it changes)
export const LabradorIcon = (props: SVGProps) => {
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
					<path d="M339 46.81c7.1 8.93 18.2 27.12 27.4 45.44 5.3 10.55 10 21.15 13.3 29.95 3.4 8.8 5.1 16.5 5.1 17.8 0 67.6-16.9 126.5-41.9 170.3-10.2 17.9-21.7 33.2-33.9 45.5l1.9-19.3c6.5-12.4 10.8-24.1 13.4-35.1 9.8-4.4 17.9-10.7 24.2-17l-12.8-12.6c-7.5 7.5-19 15.1-31.4 16.9-12.5 1.7-26.2-1.2-41.8-16.9l-6.4-6.5-6.4 6.4c-15.6 15.8-29.4 18.7-41.9 17-12.4-1.8-23.9-9.4-31.4-16.9l-12.8 12.6c6.3 6.3 14.5 12.6 24.2 17 2.6 10.9 6.9 22.6 13.4 35.1l1.9 19.3c-12.2-12.3-23.7-27.6-33.9-45.5-25-43.8-41.9-102.7-41.9-170.3 0-1.3 1.7-9 5.1-17.8 3.3-8.8 8.1-19.4 13.4-29.94 9.1-18.32 20.2-36.5 27.3-45.44 51.1 15.51 114.9 15.5 165.9 0zm38.8 28.16C418.6 108.9 461.9 152 488 178.2c-.6 48.4-12.9 84.1-30.4 107.5-16 21.3-36 32.5-56.3 34.7L388.4 247c9.1-32.4 14.4-68.4 14.4-107 0-7.3-2.6-14.7-6.2-24.2-3.7-9.6-8.6-20.56-14.1-31.57-1.6-3.11-3.1-6.2-4.7-9.26zm-243.5 0c-1.6 3.05-3.1 6.13-4.7 9.24-5.4 11-10.4 21.99-14 31.59-3.7 9.5-6.3 16.9-6.3 24.2 0 38.6 5.3 74.6 14.4 107l-12.9 73.4c-20.27-2.2-40.27-13.4-56.27-34.7-17.5-23.4-29.8-59.1-30.4-107.5 26.1-26.2 69.5-69.3 110.17-103.21zm190.6 47.83a25.82 25.9 0 0 0-25.8 25.9 25.82 25.9 0 0 0 25.8 25.9 25.82 25.9 0 0 0 25.8-25.9 25.82 25.9 0 0 0-25.8-25.9zm-137.7 0a25.82 25.9 0 0 0-25.8 25.9 25.82 25.9 0 0 0 25.8 25.9 25.82 25.9 0 0 0 25.8-25.9 25.82 25.9 0 0 0-25.8-25.9zm68.9 69c-17.3 0-51.7 17.3-51.7 34.5 0 0 18.2 34.6 34.4 34.6 8.1 0 9.2-17.3 17.3-17.3 8 0 9.1 17.3 17.2 17.3 16.2 0 34.4-34.6 34.4-34.6 0-17.2-34.4-34.5-51.6-34.5zm9 104.9c10.3 6.5 20.7 9.7 30.6 10.2l-10.1 100.7c-.8.6-2.8 1.6-5.7 2.5-5.9 1.8-14.9 2.9-23.9 2.9-8.9 0-17.9-1.1-23.8-2.9-2.9-.9-4.9-1.9-5.7-2.5l-10.1-100.7c9.9-.5 20.4-3.7 30.7-10.2v67.8h18zm103.6 3.1c6.4 20.5 14 50 20.6 80.1 8.8 40.3 15.9 82.5 17.5 107.1H105.4c1.6-24.6 8.7-66.8 17.5-107.1 6.5-30 14.2-59.4 20.6-80 3.1 6.7 6.5 13.2 10 19.4 15 26.3 32.9 47.9 52.4 63.6l2.7 27v-.9c0 5.5 3.3 10.1 6.8 12.8 3.5 2.7 7.4 4.3 11.6 5.5 8.6 2.6 18.8 3.7 29 3.7 10.3 0 20.5-1.1 29.1-3.7 4.2-1.2 8.1-2.8 11.6-5.5s6.8-7.3 6.8-12.8v.9l2.7-27c19.5-15.6 37.4-37.3 52.4-63.6 3.5-6.2 6.9-12.7 10.1-19.5z"></path>
				</g>
			</Icon>
		</IconWrapper>
	)
}
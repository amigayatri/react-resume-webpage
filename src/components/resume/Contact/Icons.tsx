import { Icon, IconWrapper } from "./Styles"
import { useTheme } from "styled-components"

const WebsiteIcon = ({ color, alt }: { color: string; alt: string }) => {
	return (
		<IconWrapper>
			<Icon
				role="img"
				fill={color}
				id="Layer_1"
				version="1.1"
				viewBox="0 0 128 128"
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<title>{alt}</title>
				<g>
					<path d="M1,41h118v78H9V51H1v76h126V1H1V41z M9,9h110v24H9V9z" />
					<rect height="8" width="8" x="17" y="17" />
					<rect height="8" width="8" x="33" y="17" />
					<rect height="8" width="42" x="69" y="17" />
				</g>
			</Icon>
		</IconWrapper>
	)
}

const EmailIcon = ({ color, alt }: { color: string; alt: string }) => {
	return (
		<IconWrapper>
			<Icon
				role="img"
				fill={color}
				id="Layer_1"
				version="1.1"
				viewBox="0 0 128 128"
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<title>{alt}</title>
				<g>
					<path d="M127,16H1v6.7l63,59.8l55-52.2V104H9V50H1v62h126V16z M64,71.5L14,24H114L64,71.5z" />
				</g>
			</Icon>
		</IconWrapper>
	)
}

const LinkedinIcon = ({ color, alt }: { color: string; alt: string }) => {
	return (
		<IconWrapper>
			<Icon
				role="img"
				fill={color}
				id="Layer_1"
				version="1.1"
				viewBox="0 0 128 128"
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<title>{alt}</title>
				<g>
					<rect height="40" width="8" x="35" y="49" />
					<rect height="8" width="8" x="35" y="31" />
					<path d="M63,74v-5c0-6.1,4.9-11,11-11s11,4.9,11,11v20h8V69c0-10.5-8.5-19-19-19c-4.1,0-7.9,1.3-11,3.5V49h-8v20v5v15h8V74z" />
					<path d="M127,1H1v126h126V1z M119,119H9V9h110V119z" />
				</g>
			</Icon>
		</IconWrapper>
	)
}

const PhoneIcon = ({ color, alt }: { color: string; alt: string }) => {
	return (
		<IconWrapper>
			<Icon
				role="img"
				fill={color}
				id="Layer_1"
				version="1.1"
				viewBox="0 0 128 128"
				xmlSpace="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<title>{alt}</title>
				<g>
					<path d="M53,13H7v4c0,57.3,46.7,104,104,104h4V75H73.6L54.2,94.4C45.6,88,38.1,80.3,32,71.4l21-21V13z M76.9,83H107v29.9   c-16.8-0.7-32.5-5.7-46-14L76.9,83z M45,47.1L27.6,64.5C20.2,51.6,15.7,36.8,15.1,21H45V47.1z" />
				</g>
			</Icon>
		</IconWrapper>
	)
}

export const ContactIcon = ({ id, i, alt }: { id: string, i: number, alt: string }) => {
	const theme = useTheme()
	const icons: { [key: string]: JSX.Element } = {
		email: ( <EmailIcon color={i & 1 ? theme.accent : theme.secondAccent} alt={alt} />),
		linkedin: ( <LinkedinIcon color={i & 1 ? theme.accent : theme.secondAccent}	alt={alt}/>),
		phone: (<PhoneIcon color={i & 1 ? theme.accent : theme.secondAccent} alt={alt} />),
		website: (<WebsiteIcon color={i & 1 ? theme.accent : theme.secondAccent} alt={alt}/>)
	}
	return icons[id]
}

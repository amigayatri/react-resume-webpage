import {
	FooterWrapper,
	Link,
	SecondaryLink,
	FooterContent
} from "./Footer.styled.ts"
import { Trans } from "react-i18next/TransWithoutContext"
import { linkProps } from "../../../constants/linkprops.ts"
import { FooterBaseProps } from "./"

export const FooterBase = ({ t, isRTL }: FooterBaseProps) => {
	const tOptions = { name: "Amira Gayatri", year: "2024" }
	return (
		<FooterWrapper>
			<FooterContent $isRTL={isRTL}>
				<Trans t={t} i18nKey="text" tOptions={tOptions}>
					t
					<Link
						{...linkProps}
						href="https://github.com/amigayatri/react-resume-webpage"
					>
						l
					</Link>
					<SecondaryLink {...linkProps} href="https://github.com/amigayatri/">
						l
					</SecondaryLink>
					t
				</Trans>
			</FooterContent>
		</FooterWrapper>
	)
}

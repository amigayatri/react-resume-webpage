import { FooterWrapper, Link, SecondaryLink } from "./Footer.styled.ts"
import BaseElement from "../../../types/BaseElementProps.ts"
import { Trans } from "react-i18next/TransWithoutContext"
import { linkProps } from "../../../constants/linkprops.ts"
import { TFunction } from "i18next"

interface FooterBaseProps extends BaseElement {
	t: TFunction<any, undefined>
}

export const FooterBase = ({ t }: FooterBaseProps) => {
	const tOptions = { name: "Amira Gayatri", year: "2024" }
	return (
		<FooterWrapper>
			<Trans t={t} i18nKey="footer.text" tOptions={tOptions}>
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
		</FooterWrapper>
	)
}

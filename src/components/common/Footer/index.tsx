import { useTranslation, Trans } from "react-i18next"
import { FooterWrapper, Link, SecondaryLink } from "./Footer.styled"
import VisitorMap from "../VisitorMap"
import linkProps from "../../../constants/linkprops"

const Footer = () => {
	const { i18n } = useTranslation()
	const year = new Date("2024/02/01").toLocaleDateString(i18n.language, {
		year: "numeric"
	})
	const tOptions = { name: "Amira Gayatri", year }
	return (
		<FooterWrapper>
			<Trans i18nKey="footer.text" tOptions={tOptions}>
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
			<VisitorMap id="invisible" />
		</FooterWrapper>
	)
}

export default Footer

import { useTranslation } from "react-i18next"
import { FooterWrapper, Link } from "./Footer.styled"
import { isRtlLang } from "rtl-detect"

const Footer = () => {
	const { t, i18n } = useTranslation()
	const year = new Date("2024/02/01").toLocaleDateString(i18n.language, {
		year: "numeric"
	})
	const textWithoutYear = t("footer.text", { name: "Amira Gayatri" })
	const text = isRtlLang(i18n.language)
		? year + " - " + textWithoutYear
		: textWithoutYear + " - " + year
	return (
		<FooterWrapper>
			<Link href="https://github.com/amigayatri/react-resume-webpage">
				{text}
			</Link>
		</FooterWrapper>
	)
}

export default Footer

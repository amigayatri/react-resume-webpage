import { useTranslation } from "react-i18next"
import { FooterWrapper, Link, Name } from "./Footer.styled"

const Footer = () => {
	const { t, i18n } = useTranslation()
	const year = new Date("2024/02/01").toLocaleDateString(i18n.language, {
		year: "numeric"
	})
	return (
		<FooterWrapper>
			<Link href="https://github.com/amigayatri/react-resume-webpage">
				{t("footer.link")}
			</Link>{" "}
			{t("footer.text")} <Name>Amira Gayatri</Name> - {year}
		</FooterWrapper>
	)
}

export default Footer

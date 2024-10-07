import { useTranslation } from "react-i18next"
import { FooterWrapper, Link, Name } from "./Footer.styled"

const Footer = () => {
	const { t, i18n } = useTranslation()
	const year = new Date("2024/02/01").toLocaleDateString(i18n.language, {
		year: "numeric"
	})
	const text = t("footer.text", { returnObjects: true, name: "Amira Gayatri" })
	console.log(text)
	return (
		<FooterWrapper>
			<Link href="https://github.com/amigayatri/react-resume-webpage"></Link>{" "}
			{t("footer.text")} <Name>Amira Gayatri</Name> - {year}
		</FooterWrapper>
	)
}

export default Footer

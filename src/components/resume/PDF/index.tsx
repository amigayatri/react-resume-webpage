import TranslatedResumeProps from "../../../types/TranslatedResumeProps"
import {
	StyleSheet,
	Document,
	Page,
	Text,
	View,
	Image,
	Font,
	Link
} from "@react-pdf/renderer"
import TranslatedSectionProps from "../../../types/TranslatedSectionProps"
import { useTheme } from "styled-components"
import { getLangDir } from "rtl-detect"
import { useTranslation } from "react-i18next"
import { PDFDownload, PDFDownloadText } from "./DownloadPDF.styled"
import SVGIcon from "../../../icons/SVGIcon"

const pngMapping = new Map([
	["website", "contacts-pdf/website.png"],
	["phone", "contacts-pdf/phone.png"],
	["email", "contacts-pdf/email.png"],
	["linkedin", "contacts-pdf/linkedin.png"]
])
Font.register({
	family: "FiraMono",
	fontStyle: "normal",
	fontWeight: "normal",
	src: "http://fonts.gstatic.com/s/firamono/v5/SlRWfq1zeqXiYWAN-lnG-qCWcynf_cDxXwCLxiixG1c.ttf"
})
Font.register({
	family: "FiraSans",
	fontStyle: "normal",
	fontWeight: "normal",
	src: "http://fonts.gstatic.com/s/firasans/v7/EjsrzDkQUQCDwsBtLpcVQaCWcynf_cDxXwCLxiixG1c.ttf"
})
const DownloadPDF = ({ resume }: { resume: TranslatedResumeProps }) => {
	const { i18n, t } = useTranslation()
	const theme = useTheme()
	const styles = StyleSheet.create({
		page: {
			backgroundColor: theme.background,
			color: theme.primary,
			textAlign: getLangDir(i18n.language) === "ltr" ? "left" : "right",
			padding: "24px 32px"
		},
		section: {
			color: theme.primary,
			fontSize: "15px",
			fontFamily: "FiraMono",
			margin: "0 0 12px"
		},
		title: {
			color: theme.accent,
			fontSize: "30px",
			fontFamily: "FiraMono",
			lineHeight: "1"
		},
		item: {
			fontSize: "15px",
			margin: "4px 0"
		},
		subitem: {
			fontFamily: "FiraMono",
			fontSize: "13px",
			margin: "4px 0 0"
		},
		job: {
			color: theme.secondAccent,
			fontSize: "21px",
			fontStyle: "normal",
			fontFamily: "Helvetica-Oblique",
			marginBottom: "9px"
		},
		sectionTitle: {
			fontFamily: "FiraMono",
			fontSize: "18px",
			color: theme.accent,
			marginBottom: "8px"
		},
		contacts: {
			display: "flex",
			flexDirection: "row",
			fontFamily: "FiraMono",
			alignItems: "center",
			justifyContent: "space-between",
			margin: "8px -8px 16px"
		},
		date: {
			fontFamily: "FiraMono",
			fontSize: "13px"
		},
		contact: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "13px"
		},
		contactLink: {
			textDecoration: "none",
			color: theme.primary
		},
		icon: {
			width: "16px",
			height: "16px",
			marginRight: "4px"
		}
	})
	const PDF = () => {
		const currHost = import.meta.env.DEV
			? "http://localhost:5173/"
			: "http://amiragayatri.dev/"
		const showSection = (section: TranslatedSectionProps, idx: number) => {
			return (
				<View key={`section-n-${idx}`} style={styles.section}>
					<Text style={styles.sectionTitle}>{section.title}</Text>
					{section.items.map((item, idx) => (
						<View style={styles.item} key={item}>
							<Text>
								{item}
								{section.dates !== undefined && (
									<Text style={styles.date}>{section.dates[idx]}</Text>
								)}
							</Text>
							{section.subitems !== undefined && (
								<View style={styles.subitem}>
									<Text>{section.subitems[idx]}</Text>
								</View>
							)}
						</View>
					))}
				</View>
			)
		}
		return (
			<Document>
				<Page style={styles.page} size="A3">
					<View>
						<Text style={styles.title}>{resume.header.name}</Text>
						<Text style={styles.job}>{resume.header.job}</Text>
					</View>
					<View style={styles.contacts}>
						{resume.contacts.map((contact) => {
							const iconSRC = currHost + pngMapping.get(contact.icon)
							return (
								<View
									key={`contactitem-${contact.text}`}
									style={styles.contact}
								>
									<Image style={styles.icon} source={iconSRC}></Image>
									<Link style={styles.contactLink} href={contact.link}>
										{contact.text}
									</Link>
								</View>
							)
						})}
					</View>
					<View style={styles.section}>
						<Text>{resume.summary}</Text>
					</View>
					{resume.sections.map((section, idx) => showSection(section, idx))}
				</Page>
			</Document>
		)
	}
	const fileName = t("resume.download.title", { fullName: "Amira Gayatri" })
		.split(" ")
		.join("_")
	return (
		<PDFDownload document={<PDF />} fileName={fileName}>
			<SVGIcon id="download" size={48} />
			<PDFDownloadText>{t("resume.download.cta")}</PDFDownloadText>
		</PDFDownload>
	)
}

export default DownloadPDF

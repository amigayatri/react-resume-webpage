import {
	Styles,
	StyleSheet,
	Document,
	Page,
	Text,
	View,
	Image,
	Font,
	Link,
	PDFDownloadLink
} from "@alexandernanberg/react-pdf-renderer"
import {
	PDFDownload,
	PDFDownloadText,
	PDFDownloadWrapper
} from "./DownloadPDF.styled.ts"
import { SVGIcon } from "../../common/client"
import { DownloadPDFBaseProps, PDFProps, showSectionType } from "../types.ts"
import { pngMapping } from "./constants"

Font.register({
	family: "FiraMono",
	fontStyle: "normal",
	fontWeight: "normal",
	src: "https://fonts.gstatic.com/s/firamono/v5/SlRWfq1zeqXiYWAN-lnG-qCWcynf_cDxXwCLxiixG1c.ttf"
})
Font.register({
	family: "FiraSans",
	fontStyle: "normal",
	fontWeight: "normal",
	src: "https://fonts.gstatic.com/s/firasans/v7/EjsrzDkQUQCDwsBtLpcVQaCWcynf_cDxXwCLxiixG1c.ttf"
})

export const darkStyle: Styles = {
	page: {
		backgroundColor: "#212117",
		color: "#f7f7f7",
		textAlign: "left",
		padding: "24px 32px"
	},
	section: {
		color: "#f7f7f7",
		fontSize: "15px",
		fontFamily: "FiraMono",
		margin: "0 0 12px"
	},
	title: {
		color: "#67d8ef",
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
		color: "#f92472",
		fontSize: "21px",
		fontStyle: "normal",
		fontFamily: "Helvetica-Oblique",
		marginBottom: "9px"
	},
	sectionTitle: {
		fontFamily: "FiraMono",
		fontSize: "18px",
		color: "#67d8ef",
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
		color: "#f7f7f7"
	},
	icon: {
		width: "16px",
		height: "16px",
		marginRight: "4px"
	}
}
export const lightStyle: Styles = {
	page: {
		backgroundColor: "#f7f7f7",
		color: "#212117",
		textAlign: "left",
		padding: "24px 32px"
	},
	section: {
		color: "#212117",
		fontSize: "15px",
		fontFamily: "FiraMono",
		margin: "0 0 12px"
	},
	title: {
		color: "#f92472",
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
		color: "#67d8ef",
		fontSize: "21px",
		fontStyle: "normal",
		fontFamily: "Helvetica-Oblique",
		marginBottom: "9px"
	},
	sectionTitle: {
		fontFamily: "FiraMono",
		fontSize: "18px",
		color: "#f92472",
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
		color: "#212117"
	},
	icon: {
		width: "16px",
		height: "16px",
		marginRight: "4px"
	}
}


const PDF = ({ resume, isDark }: PDFProps) => {
	const styles = isDark
		? StyleSheet.create(darkStyle)
		: StyleSheet.create(lightStyle)
	const showSection: showSectionType = (section, idx) => {
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
						const iconSRC = pngMapping.get(contact.icon)
						return (
							<View key={`contactitem-${contact.text}`} style={styles.contact}>
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

export const DownloadPDFBase = ({
	resume,
	lng,
	t,
	isDark
}: DownloadPDFBaseProps) => {
	const fileName = t("download.title", { fullName: "Amira Gayatri" })
		.split(" ")
		.join("_")
	return (
		<PDFDownloadWrapper>
			<PDFDownloadLink
				document={<PDF resume={resume} isDark={isDark} />}
				fileName={fileName}
			>
				<PDFDownload>
					<SVGIcon lng={lng} local="resume" id="download" size={48} />
					<PDFDownloadText>{t("download.cta")}</PDFDownloadText>
				</PDFDownload>
			</PDFDownloadLink>
		</PDFDownloadWrapper>
	)
}

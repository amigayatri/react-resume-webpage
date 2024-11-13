import {
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
import { pngMapping, darkStyle, lightStyle } from "./constants"

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

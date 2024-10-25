import { useTranslation } from "react-i18next"
import resume from "../../../constants/resume"
import SectionProps from "../../../types/SectionProps"
import Contacts from "../Contact"
import Header from "../Header"
import Section from "../Section"
import Summary from "../Summary"
import { MainWrapper, ResumeWrapper } from "./Main.styled"
import TranslatedResume from "../../../types/TranslatedResumeProps"
import TranslatedSectionProps from "../../../types/TranslatedSectionProps"
import PDF from "../PDF"

const Main = () => {
	const { t, i18n } = useTranslation()
	const formatDate = (date: Date | undefined | string) => {
		if (date === undefined) {
			return ""
		} else if (typeof date === "string") {
			const now = t(`resume.dates.${date}`)
			return now[0].toUpperCase() + now.substring(1)
		} else {
			const dateStr = date.toLocaleDateString(i18n.language, {
				month: "long",
				year: "numeric"
			})
			const capitalizedDateStr =
				dateStr[0].toLocaleUpperCase(i18n.language) + dateStr.substring(1)
			return capitalizedDateStr
		}
	}
	const translateDates = (section: SectionProps, idx: number) => {
		if (section.dates === undefined) return ""
		const start = formatDate(section.dates[idx].start)
		const end = formatDate(section.dates[idx].end)
		return ` (${start}`.concat(end !== "" ? `,  ${end})` : ")")
	}
	const translateSection = (section: SectionProps) => {
		const translated: Partial<TranslatedSectionProps> = {}
		translated.title = t(`resume.sections.${section.name}.title`)
		if (section.subitem) translated.subitems = []
		translated.items = []
		const hasDates = section.dates !== undefined
		if (hasDates) translated.dates = []
		let idx = 0
		translated.icon = section.icon
		for (const item of section.items) {
			translated.items.push(
				t(`resume.sections.${section.name}.items.${item}.text`)
			)
			if (section.subitem)
				translated.subitems?.push(
					t(`resume.sections.${section.name}.items.${item}.subitem`)
				)
			if (hasDates) {
				translated.dates?.push(translateDates(section, idx))
			}
			idx++
		}
		return translated as TranslatedSectionProps
	}
	const translateResume = () => {
		const translated: Partial<TranslatedResume> = {
			contacts: resume.contacts.arr
		}
		translated.header = {
			name: resume.header.name,
			job: t(resume.header.job.key)
		}
		translated.summary = t(resume.summary.key)
		translated.sections = []
		for (const section of resume.sections.arr) {
			translated.sections.push(translateSection(section))
		}
		return translated as TranslatedResume
	}
	const showSection = (section: TranslatedSectionProps, index: number) => {
		return <Section key={"section" + index} section={section} />
	}
	const translated = translateResume()
	return (
		<MainWrapper>
			<PDF resume={translated} />
			<Header name={translated.header.name} job={translated.header.job} />
			<ResumeWrapper>
				<Contacts contacts={translated.contacts} />
				<Summary summary={translated.summary} />
				{translated.sections.map((section, index) =>
					showSection(section, index)
				)}
			</ResumeWrapper>
		</MainWrapper>
	)
}

export default Main

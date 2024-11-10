import Element from "../../../types/ElementProps.ts"
import { useTranslation } from "../../../i18n/"
import { MainWrapper, ResumeWrapper } from "./Main.styled"
import { resume } from "../../../constants/resume.ts"
import SectionProps from "../../../types/SectionProps.ts"
import Contacts from "../Contact"
import Header from "../Header"
import Section from "../Section"
import Summary from "../Summary"
import TranslatedResume from "../../../types/TranslatedResumeProps.ts"
import TranslatedSectionProps from "../../../types/TranslatedSectionProps.ts"
import PDF from "../PDF/client.tsx"

export const Main = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "resume")
	const cleanLng =
		lng.length > 2 ? `${lng.substring(0, 2)}-${lng.substring(2)}` : lng
	const formatDate = (date: Date | undefined | string) => {
		if (date === undefined) {
			return ""
		} else if (typeof date === "string") {
			const now = t(`dates.${date}`)
			return now[0].toUpperCase() + now.substring(1)
		} else {
			const dateStr = date.toLocaleDateString(cleanLng, {
				month: "long",
				year: "numeric"
			})
			const capitalizedDateStr =
				dateStr[0].toLocaleUpperCase(cleanLng) + dateStr.substring(1)
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
		translated.title = t(`sections.${section.name}.title`)
		if (section.subitem) translated.subitems = []
		translated.items = []
		const hasDates = section.dates !== undefined
		if (hasDates) translated.dates = []
		let idx = 0
		translated.icon = section.icon
		for (const item of section.items) {
			translated.items.push(t(`sections.${section.name}.items.${item}.text`))
			if (section.subitem)
				translated.subitems?.push(
					t(`sections.${section.name}.items.${item}.subitem`)
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
		return <Section lng={lng} key={"section" + index} section={section} />
	}
	const translated = translateResume()
	return (
		<MainWrapper>
			<PDF lng={lng} resume={translated} />
			<Header name={translated.header.name} job={translated.header.job} />
			<ResumeWrapper>
				<Contacts lng={lng} contacts={translated.contacts} />
				<Summary summary={translated.summary} />
				{translated.sections.map((section, index) =>
					showSection(section, index)
				)}
			</ResumeWrapper>
		</MainWrapper>
	)
}
export default Main

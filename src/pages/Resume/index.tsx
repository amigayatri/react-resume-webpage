import Contacts from "../../components/resume/Contact"
import Header from "../../components/resume/Header"
import Section from "../../components/resume/Section"
import Summary from "../../components/resume/Summary"
import sections from "../../constants/sections"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import SectionProps from "../../types/SectionProps"
import PageElementProps from "../../types/PageElementProps"

const Resume = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)

	const showQuestion = (section: SectionProps, index: number) => {
		return <Section key={"section" + index} section={section} />
	}

	return (
		<>
			<Header />
			<main>
				<Contacts />
				<Summary />
				{sections.map((section, index) => showQuestion(section, index))}
			</main>
		</>
	)
}

export default Resume

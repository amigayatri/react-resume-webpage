import { ThemeProvider } from "styled-components"
import Contacts from "../../components/resume/Contact"
import Header from "../../components/resume/Header"
import Section from "../../components/resume/Section"
import Summary from "../../components/resume/Summary"
import sections from "../../constants/sections"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import Monokai from "../../themes/Monokai"
import PageIdProps from "../../types/PageIdProps"
import SectionProps from "../../types/SectionProps"

const Resume = ({ pageId }: PageIdProps) => {
	useDocumentTitle(pageId)

	const showQuestion = (section: SectionProps, index: number) => {
		return <Section key={"section" + index} section={section} />
	}

	return (
		<ThemeProvider theme={Monokai}>
			<Header />
			<main>
				<Contacts />
				<Summary />
				{sections.map((section, index) => showQuestion(section, index))}
			</main>
		</ThemeProvider>
	)
}

export default Resume

import useDocumentTitle from "../../hooks/useDocumentTitle"
import { PageProps } from "../../constants/links"
import { ThemeProvider } from "styled-components"
import Monokai from "../../themes/Monokai"
import Contacts from "../../components/resume/Contact/Contact"
import { Section } from "../../components/resume/Section/Section"
import { Summary } from "../../components/resume/Summary/Summary"
import { Header } from "../../components/resume/Header/Header"
import { sections } from "../../constants"

const Resume = ({ pageId }: PageProps) => {
	useDocumentTitle(pageId)
	return (
		<ThemeProvider theme={Monokai}>
			<Header />
			<main>
				<Contacts />
				<Summary />
				{sections.map((section, index) => {
					return <Section key={"section" + index} section={section} />
				})}
			</main>
		</ThemeProvider>
	)
}

export default Resume

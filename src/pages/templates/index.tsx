import useDocumentTitle from "../../hooks/useDocumentTitle"
import { PageProps } from "../../constants/links"
import { ThemeProvider } from "styled-components"
import Monokai from "../../themes/Monokai"

const TemplateName = ({ pageId }: PageProps) => {
	useDocumentTitle(pageId)
	return (
		<ThemeProvider theme={Monokai}>
			<h1>TemplateName page</h1>
		</ThemeProvider>
	)
}

export default TemplateName

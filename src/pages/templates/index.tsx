import useDocumentTitle from "../../hooks/useDocumentTitle"
import { ThemeProvider } from "styled-components"
import Monokai from "../../themes/Monokai"
import PageIdProps from "../../types/PageIdProps"

const TemplateName = ({ pageId }: PageIdProps) => {
	useDocumentTitle(pageId)
	return (
		<ThemeProvider theme={Monokai}>
			<h1>TemplateName page</h1>
		</ThemeProvider>
	)
}

export default TemplateName

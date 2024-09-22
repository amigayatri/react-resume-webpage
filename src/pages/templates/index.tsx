import useDocumentTitle from "../../hooks/useDocumentTitle"
import { ThemeProvider } from "styled-components"
import Monokai from "../../themes/Monokai"
import PageElementProps from "../../types/PageElementProps"

const TemplateName = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return (
		<ThemeProvider theme={Monokai}>
			<h1>TemplateName page</h1>
		</ThemeProvider>
	)
}

export default TemplateName

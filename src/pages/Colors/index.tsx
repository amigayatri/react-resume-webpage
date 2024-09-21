import useDocumentTitle from "../../hooks/useDocumentTitle"
import { ThemeProvider } from "styled-components"
import Monokai from "../../themes/Monokai"
import Header from "../../components/colors/Header"
import Main from "../../components/colors/Main"
import PageIdProps from "../../types/PageIdProps"

const Colors = ({ pageId }: PageIdProps) => {
	useDocumentTitle(pageId)
	return (
		<ThemeProvider theme={Monokai}>
			<Header />
			<Main />
		</ThemeProvider>
	)
}

export default Colors

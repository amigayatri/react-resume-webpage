import useDocumentTitle from "../../hooks/useDocumentTitle"
import { PageProps } from "../../constants/links"
import { ThemeProvider } from "styled-components"
import Monokai from "../../themes/Monokai"
import Header from "../../components/colors/Header"
import Main from "../../components/colors/Main"

const Colors = ({ pageId }: PageProps) => {
	useDocumentTitle(pageId)
	return (
		<ThemeProvider theme={Monokai}>
			<Header />
			<Main />
		</ThemeProvider>
	)
}

export default Colors

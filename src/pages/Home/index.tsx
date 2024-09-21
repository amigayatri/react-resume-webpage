import useDocumentTitle from "../../hooks/useDocumentTitle"
import { PageProps } from "../../constants/links"
import { ThemeProvider } from "styled-components"
import Monokai from "../../themes/Monokai"
import Header from "../../components/home/Header"
import Main from "../../components/home/Main/Main"

const Home = ({ pageId }: PageProps) => {
	useDocumentTitle(pageId)
	return (
		<ThemeProvider theme={Monokai}>
			<Header />
			<Main />
		</ThemeProvider>
	)
}

export default Home

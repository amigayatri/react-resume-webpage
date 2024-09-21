import useDocumentTitle from "../../hooks/useDocumentTitle"
import { ThemeProvider } from "styled-components"
import Monokai from "../../themes/Monokai"
import Header from "../../components/home/Header"
import Main from "../../components/home/Main"
import PageIdProps from "../../types/PageIdProps"

const Home = ({ pageId }: PageIdProps) => {
	useDocumentTitle(pageId)
	return (
		<ThemeProvider theme={Monokai}>
			<Header />
			<Main />
		</ThemeProvider>
	)
}

export default Home

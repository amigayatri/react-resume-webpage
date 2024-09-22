import useDocumentTitle from "../../hooks/useDocumentTitle"
import Header from "../../components/home/Header"
import Main from "../../components/home/Main"
import PageElementProps from "../../types/PageElementProps"

const Home = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return (
		<>
			<Header />
			<Main />
		</>
	)
}

export default Home

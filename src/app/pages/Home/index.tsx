import useDocumentTitle from "../../hooks/useDocumentTitle"
import Header from "../../components/home/Header"
import Main from "../../components/home/Main/MainBase"
import props from "./Home.props"

const Home = () => {
	useDocumentTitle(props.id)
	return (
		<>
			<Header />
			<Main />
		</>
	)
}

export default Home

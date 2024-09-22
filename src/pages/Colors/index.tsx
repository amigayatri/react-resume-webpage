import useDocumentTitle from "../../hooks/useDocumentTitle"
import Header from "../../components/colors/Header"
import Main from "../../components/colors/Main"
import PageElementProps from "../../types/PageElementProps"

const Colors = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return (
		<>
			<Header />
			<Main />
		</>
	)
}

export default Colors

import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/cats/Main"

const Cats = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default Cats

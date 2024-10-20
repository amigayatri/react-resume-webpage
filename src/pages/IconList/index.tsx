import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/icons/Main"

const IconList = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default IconList

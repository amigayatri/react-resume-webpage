import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/3d/Main"

const ThreeD = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default ThreeD

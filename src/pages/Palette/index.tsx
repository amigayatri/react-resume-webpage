import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/palette/Main"

const Palette = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default Palette

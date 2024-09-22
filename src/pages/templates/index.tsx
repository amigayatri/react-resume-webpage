import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"

const TemplateName = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <h1>TemplateName page</h1>
}

export default TemplateName

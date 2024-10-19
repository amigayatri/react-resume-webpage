import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/brasil/Main"

const Brasil = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default Brasil

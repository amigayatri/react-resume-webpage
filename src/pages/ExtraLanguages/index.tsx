import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/extralanguages/Main"

const ExtraLanguages = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default ExtraLanguages

import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/resume/Main/"

const Resume = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default Resume

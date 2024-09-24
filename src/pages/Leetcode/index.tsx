import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/leetcode/Main"

const Leetcode = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	const user = "amira_gayatri"
	return <Main user={user} />
}

export default Leetcode

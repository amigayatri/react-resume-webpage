import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/holidays/Main"

const Holidays = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default Holidays

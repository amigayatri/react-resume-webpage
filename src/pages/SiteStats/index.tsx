import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/stats/Main"

const SiteStats = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return <Main />
}

export default SiteStats

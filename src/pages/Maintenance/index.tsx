import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/error/Main"
import SVGIcon from "../../icons/SVGIcon"

const Maintenance = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return (
		<Main messageId={page.id}>
			<SVGIcon local="maintenance" size={128} id="bug" />
			<SVGIcon local="maintenance" size={128} id="gitbranch" />
			<SVGIcon local="maintenance" size={128} id="tools" />
		</Main>
	)
}

export default Maintenance

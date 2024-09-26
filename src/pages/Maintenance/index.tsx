import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/error/Main"
import SVGIcon from "../../icons/SVGIcon"

const Maintenance = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return (
		<Main messageId={page.id}>
			<SVGIcon size={128} id="bug" />
			<SVGIcon size={128} id="gitbranch" />
			<SVGIcon size={128} id="tools" />
		</Main>
	)
}

export default Maintenance

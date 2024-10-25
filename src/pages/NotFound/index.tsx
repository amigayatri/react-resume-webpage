import useDocumentTitle from "../../hooks/useDocumentTitle"
import PageElementProps from "../../types/PageElementProps"
import Main from "../../components/error/Main"
import SVGIcon from "../../icons/SVGIcon"

const NotFound = ({ page }: PageElementProps) => {
	useDocumentTitle(page.id)
	return (
		<Main messageId="404">
			<SVGIcon local="404" size={128} id="brokenlink" />
			<></>
		</Main>
	)
}

export default NotFound

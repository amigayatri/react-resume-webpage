import { Route, Routes } from "react-router-dom"
import pages from "./constants/pages"
import PageProps from "./types/PageProps"

const Router = () => {
	const showPage = (page: PageProps) => {
		const PageElement = page.element
		return (
			<Route
				key={"route-" + page.id}
				path={page.path}
				element={<PageElement page={page} />}
			/>
		)
	}
	return <Routes>{pages.map((page) => showPage(page))}</Routes>
}
export default Router

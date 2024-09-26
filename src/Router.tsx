import { Route, Routes } from "react-router-dom"
import PageProps from "./types/PageProps"
import { allPages } from "./constants/pages"

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
	return <Routes>{allPages.map((page) => showPage(page))}</Routes>
}
export default Router

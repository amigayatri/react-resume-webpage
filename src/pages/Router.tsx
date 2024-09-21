import { Route, Routes } from "react-router-dom"
import { pages, Page } from "../constants/links"

const Router = () => {
	const showPage = (page: Page) => {
		return (
			<Route
				key={"route-" + page.name}
				path={page.path}
				element={page.element}
			/>
		)
	}
	return <Routes>{pages.map((page) => showPage(page))}</Routes>
}
export default Router

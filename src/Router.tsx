import { Route, Routes } from "react-router-dom"
import pages from "./constants/pages"
import PageProps from "./types/PageProps"

const Router = () => {
	const showPage = (page: PageProps) => {
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

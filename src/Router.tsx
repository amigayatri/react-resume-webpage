import { Route, Routes } from "react-router-dom"
import PageProps from "./types/PageProps"
import { allPages, underMaintenance, errorPages } from "./constants/pages"

const Router = () => {
	const getMaintenanceRoutes = () => {
		const Maintenance = errorPages.maintenance.element
		return Array.from(underMaintenance.keys()).map((path) => (
			<Route
				key={"maintenance-" + path}
				path={path}
				element={<Maintenance page={errorPages.maintenance} />}
			/>
		))
	}
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
	return (
		<Routes>
			{showPage(errorPages.notFound)}
			{getMaintenanceRoutes()}
			{allPages.map((page) => showPage(page))}
		</Routes>
	)
}
export default Router

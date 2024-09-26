import HomeProps from "../pages/Home/Home.props"
import ResumeProps from "../pages/Resume/Resume.props"
import PageProps from "../types/PageProps"
import ColorsProps from "../pages/Colors/Colors.props"
import ExtraLanguagesProps from "../pages/ExtraLanguages/ExtraLanguages.props"
import LeetcodeProps from "../pages/Leetcode/leetcode.props"
import MaintenanceProps from "../pages/Maintenance/Maintenance.props"
import NotFoundProps from "../pages/NotFound/NotFound.props"

export const pages: PageProps[] = [HomeProps, ResumeProps]

export const extraPages: PageProps[] = [
	ColorsProps,
	ExtraLanguagesProps,
	LeetcodeProps
]

export const allPages: PageProps[] = [...pages, ...extraPages]

export const underMaintenance = [LeetcodeProps.path]

export const errorPages = {
	notFound: NotFoundProps,
	maintenance: MaintenanceProps
}
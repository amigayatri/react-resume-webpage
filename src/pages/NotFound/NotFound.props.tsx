import NotFound from "."
import PageProps from "../../types/PageProps"

const NotFoundProps: PageProps = {
	path: "*",
	element: NotFound,
	id: "404",
	isHome: false,
	icon: ""
}

export default NotFoundProps

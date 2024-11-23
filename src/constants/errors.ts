import { ErrorProps, errorId } from "../types/error/"

//$notFoundIconsStart
export const notFound: ErrorProps = { id: "404", icons: ["brokenlink"] }
//$notFoundIconsEnd

//$maintenanceIconsStart
export const maintenance: ErrorProps = {
	id: "maintenance",
	icons: ["bug", "github", "tools"]
}
//$maintenanceIconsEnd

type errorsMap = Map<errorId, ErrorProps>
export const errors: errorsMap = new Map([
	["404", notFound],
	["maintenance", maintenance]
])

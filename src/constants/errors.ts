import { ErrorProps, errorId } from "../types/error/"

export const notFound: ErrorProps = { id: "404", icons: ["brokenlink"] }
export const maintenance: ErrorProps = {
	id: "maintenance",
	icons: ["bug", "github", "tools"]
}
type errorsMap = Map<errorId, ErrorProps>
export const errors: errorsMap = new Map([
	["404", notFound],
	["maintenance", maintenance]
])

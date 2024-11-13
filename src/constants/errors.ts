import { ErrorProps } from "../types/error/"

export const notFound: ErrorProps = { id: "404", icons: ["brokenlink"] }
export const maintenance: ErrorProps = {
	id: "maintenance",
	icons: ["bug", "github", "tools"]
}
export const errors: Map<string, ErrorProps> = new Map([
	["404", notFound],
	["maintenance", maintenance]
])

import { iconKey } from "../common"

const errorIds = ["404", "maintenance"] as const
export type errorId = (typeof errorIds)[number]

export interface ErrorProps {
	id: errorId
	icons: iconKey[]
}

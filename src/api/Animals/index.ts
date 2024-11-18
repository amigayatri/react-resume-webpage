import { getPictureFn, AnimalAPIProps, animalKey } from "../../types/animals"
import { APIs } from "./constants"

export class AnimalAPI implements AnimalAPIProps {
	constructor() {}

	getPicture: getPictureFn = async (id) => {
		const APIInfo = APIs.get(id)
		if (APIInfo === undefined) return ""
		const { link, format } = APIInfo
		const response = await fetch(link)
		const body = await response.json()
		return format(body)
	}
}

export type { animalKey }

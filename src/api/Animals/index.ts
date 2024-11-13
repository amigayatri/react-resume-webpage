import { getPictureType, AnimalAPIProps } from "../../types/animals"
import { APIs } from "./constants"

class AnimalAPI implements AnimalAPIProps {
	constructor() {}

	getPicture: getPictureType = async (id) => {
		const APIInfo = APIs.get(id)
		if (APIInfo === undefined) return ""
		const { link, format } = APIInfo
		const response = await fetch(link)
		const body = await response.json()
		return format(body)
	}
}
export default AnimalAPI

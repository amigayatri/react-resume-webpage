import { getAllIconsIds } from "./functions"
import { iconKey } from "../types"

const emptyKeys: iconKey[] = []

const aCode = "a".charCodeAt(0)

const letterMap: Map<string, iconKey[]> = new Map(
	Array.from({ length: 26 }, (_, idx) => [
		String.fromCharCode(aCode + idx),
		Array.from(emptyKeys)
	])
)

const initializeMap = () => {
	for (const id of getAllIconsIds()) {
		const [firstChar] = id.split("")
		const charArr = letterMap.get(firstChar.toLowerCase())
		if (charArr !== undefined) {
			charArr.push(id)
		}
	}
}

initializeMap()

type getIconsByFirstLetter = (letter: string) => iconKey[]
const getIconsByFirstLetter: getIconsByFirstLetter = (letter) => {
	if (letter.length > 1) return []
	const letterIcons = letterMap.get(letter)
	if (letterIcons === undefined) return []
	return letterIcons
}

export { getIconsByFirstLetter }

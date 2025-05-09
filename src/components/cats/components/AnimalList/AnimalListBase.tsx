import { AnimalListWrapper } from "./AnimalList.styled.ts"
import { AnimalAPI, animalKey } from "../../../../api/Animals"
import { useState } from "react"
import { Controls, AddButtons, PicturesLists } from "../"
import { emptyPics, defaultControls } from "../../../../constants/animals.ts"
import { AnimalListBaseElementProps } from "../types.ts"

type handleFetch = (id: animalKey) => Promise<string[]>
type handleAddPicture = (id: animalKey) => void
export const AnimalListBase = (props: AnimalListBaseElementProps) => {
	const api = new AnimalAPI()
	const [pictures, setPictures] = useState(new Map(emptyPics))
	const [controls, setControls] = useState(defaultControls)

	const handleFetch: handleFetch = async (id) => {
		const { count } = controls
		const newList = []
		for (let i = 0; i < count; i++) {
			const pic = await api.getPicture(id)
			newList.push(pic)
		}
		return newList
	}
	const handleAddPicture: handleAddPicture = (id) => {
		handleFetch(id).then((newList) => {
			const newPictures = new Map(pictures.entries())
			const prev = pictures.get(id)
			if (prev === undefined) return
			const newArr = [...newList, ...Array.from(prev.list)]
			newPictures.set(id, { icons: prev.icons, list: newArr })
			setPictures(newPictures)
		})

		const listsWrapper = document.getElementById("lists-wrapper")
		const animalList = document.getElementById(id + "-list")
		if (listsWrapper === null || animalList === null) return
		const half = listsWrapper.offsetWidth >> 1
		const newPos =
			animalList.offsetLeft < half ? 0 : animalList.offsetLeft - half
		listsWrapper.scrollLeft = newPos
	}
	const entries = Array.from(pictures.entries())

	return (
		<AnimalListWrapper>
			<AddButtons {...props} controls={controls} handleAdd={handleAddPicture} />
			<Controls {...props} controls={controls} setControls={setControls} />
			<PicturesLists {...props} controls={controls} pictures={entries} />
		</AnimalListWrapper>
	)
}

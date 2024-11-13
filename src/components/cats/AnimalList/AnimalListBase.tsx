import { AnimalListWrapper } from "./AnimalList.styled.ts"
import AnimalAPI from "../../../api/Animals"
import { useState } from "react"
import { Controls } from "../Controls/"
import { AddButtons } from "../AddButtons/"
import { PicturesLists } from "../PicturesLists/"
import { emptyPics, defaultControls } from "../../../constants/animals.ts"
import { BaseElementProps } from "../../../types/common/"

export const AnimalListBase = (props: BaseElementProps) => {
	const api = new AnimalAPI()
	const [pictures, setPictures] = useState(new Map(emptyPics))
	const [controls, setControls] = useState(defaultControls)

	const handleFetch = async (id: string) => {
		const { count } = controls
		const newList = []
		for (let i = 0; i < count; i++) {
			const pic = await api.getPicture(id)
			newList.push(pic)
		}
		return newList
	}
	const handleAddPicture = (id: string) => {
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

import { useEffect, useState } from "react"
import { AddButtons, Controls, PicturesLists } from "../"
import { AnimalAPI, animalKey } from "../../../../api/Animals"
import { emptyPics } from "../../../../constants/animals.ts"
import { useMyRouter } from "../../../../hooks/"
import { AnimalListBaseElementProps, ControlsValues, handleControlsChange } from "../types.ts"
import { AnimalListWrapper } from "./AnimalList.styled.ts"

type handleFetch = (id: animalKey) => Promise<string[]>
type handleAddPicture = (id: animalKey) => void
type getControls = () => ControlsValues

export const AnimalListBase = (props: AnimalListBaseElementProps) => {
    const api = new AnimalAPI()
    const [pictures, setPictures] = useState(new Map(emptyPics))
    const myRouter = useMyRouter()

    const getControls: getControls = () => {
        const partialControl: Partial<ControlsValues> = {}
        partialControl.count = Number(myRouter.params.get("count")) || 1
        partialControl.hideEmpty = Boolean(myRouter.params.get("hideEmpty") || false)
        partialControl.size = Number(myRouter.params.get("size"))
        return partialControl as ControlsValues
    }
    const [controls, setControls] = useState(getControls())

    useEffect(() => {
        setControls(getControls())
    }, [])

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
        const newPos = animalList.offsetLeft < half ? 0 : animalList.offsetLeft - half
        listsWrapper.scrollLeft = newPos
    }

    const handleControlsChange: handleControlsChange = (hideEmpty, count, size) => {
        const newControls: ControlsValues = { hideEmpty, count, size }
        myRouter.params.set("count", newControls.count.toString())
        myRouter.params.set("size", newControls.size.toString())
        myRouter.params.set("hideEmpty", String(hideEmpty))
        setControls(newControls)
        myRouter.update()
    }

    const entries = Array.from(pictures.entries())

    return (
        <AnimalListWrapper>
            <AddButtons {...props} controls={controls} handleAdd={handleAddPicture} />
            <Controls {...props} controls={controls} handleChange={handleControlsChange} />
            <PicturesLists {...props} controls={controls} pictures={entries} />
        </AnimalListWrapper>
    )
}

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Palette, PaletteAnchors, Select } from "../"
import { getPalette, isGroup, isPaletteName } from "../../../../../lib/palettes"
import { groupKey, paletteKey } from "../../../../../types/palette"
import { PalettesListBaseProps, emptyNames, emptyPalettes } from "../types"
import { Title } from "./PalettesList.styled"

type addPalette = (group: groupKey | string, name: paletteKey | string) => void

export const PalettesListBase = ({ t, lng }: PalettesListBaseProps) => {
    const emptyName: emptyNames = []
    const [updated, setUpdated] = useState(true)
    const [names, setNames] = useState(emptyName)
    const empty: emptyPalettes = []
    const [palettes, setPalettes] = useState(empty)
    const emptyShowing: Map<groupKey, Set<paletteKey>> = new Map()
    const [showing] = useState(emptyShowing)
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const updateParams = () => {
        const nameList = names.map(({ group, name }) => `${group}_${name}`).join(",")
        if (nameList === "") {
            router.push(pathname)
        } else {
            const currParams = new URLSearchParams(searchParams)
            currParams.set("list", nameList)
            const newRoute = `${pathname}?${currParams.toString()}`
            router.push(newRoute)
        }
    }
    useEffect(() => {
        const currList: emptyPalettes = []
        names.forEach(({ name, group }) => {
            const curr = getPalette(group, name)
            if (curr === undefined) return
            currList.push(curr)
        })
        setPalettes(currList)
        updateParams()
        setUpdated(true)
    }, [updated])
    useEffect(() => {
        const currParamsList = new URLSearchParams(searchParams).get("list")?.split(",") || []
        for (const id of currParamsList) {
            const [group, name] = id.split("_")
            addPalette(group, name)
        }
    }, [searchParams])
    const removePalette: addPalette = (groupToRemove, nameToRemove) => {
        if (!isGroup(groupToRemove) || !isPaletteName(nameToRemove)) return
        const newNames = names.filter(({ group, name }) => name !== nameToRemove || group !== groupToRemove)
        setNames(newNames)
        setUpdated(false)
        const groupSet = showing.get(groupToRemove)
        if (groupSet === undefined) return
        groupSet.delete(nameToRemove)
        if (groupSet.size === 0) {
            showing.delete(groupToRemove)
        } else {
            showing.set(groupToRemove, groupSet)
        }
    }
    const addPalette: addPalette = (group, name) => {
        if (!isGroup(group) || !isPaletteName(name)) return
        const groupSet = showing.get(group) || new Set()
        if (groupSet.has(name)) return
        const currNames = names
        const newPalette = getPalette(group, name)
        if (newPalette === undefined) return
        currNames.push({ group, name })
        setNames(currNames)
        setUpdated(false)
        groupSet.add(name)
        showing.set(group, groupSet)
    }
    return (
        <>
            <Title>{t("title")}</Title>
            <Select t={t} lng={lng} showing={showing} add={addPalette} />
            <PaletteAnchors t={t} lng={lng} list={names} />
            {palettes.map((palette, idx) => (
                <Palette
                    t={t}
                    lng={lng}
                    info={names[idx]}
                    key={`palette-idx-${idx}`}
                    palette={palette}
                    remove={removePalette}
                />
            ))}
        </>
    )
}

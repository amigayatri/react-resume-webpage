import { Title } from "./PalettesList.styled"
import { useEffect, useState } from "react"
import { getPalette, isGroup, isPaletteName } from "../../../../../lib/palettes"
import { Select, Palette, PaletteAnchors } from "../"
import { PalettesListBaseProps, emptyNames, emptyPalettes } from "../types"
import { groupKey, paletteKey } from "../../../../../types/palette"

type addPalette = (group: groupKey | string, name: paletteKey | string) => void

export const PalettesListBase = ({ t, lng }: PalettesListBaseProps) => {
	const emptyName: emptyNames = []
	const [updated, setUpdated] = useState(true)
	const [names, setNames] = useState(emptyName)
	const empty: emptyPalettes = []
	const [palettes, setPalettes] = useState(empty)
	const emptyShowing: Map<groupKey, Set<paletteKey>> = new Map()
	const [showing] = useState(emptyShowing)
	useEffect(() => {
		const currList: emptyPalettes = []
		names.forEach(({ name, group }) => {
			const curr = getPalette(group, name)
			if (curr === undefined) return
			currList.push(curr)
		})
		setPalettes(currList)
		setUpdated(true)
	}, [updated])
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
				/>
			))}
		</>
	)
}

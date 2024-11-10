import { Title } from "./PalettesList.styled"
import Select from "../Select"
import { useEffect, useState } from "react"
import PaletteProps from "../../../types/PaletteProps"
import PaletteInfoProps from "../../../../types/PaletteInfoProps"
import palettesMap from "../../../constants/palettes"
import Palette from "../Palette"
import PaletteAnchors from "../PaletteAnchors"
import BaseElement from "../../../types/BaseElementProps"
import { TFunction } from "i18next"

interface PaletteListBaseProps extends BaseElement {
	t: TFunction<any, undefined>
}
export const PalettesListBase = ({ t, lng }: PaletteListBaseProps) => {
	const emptyName: PaletteInfoProps[] = []
	const [updated, setUpdated] = useState(true)
	const [names, setNames] = useState(emptyName)
	const empty: PaletteProps[] = []
	const [palettes, setPalettes] = useState(empty)
	const emptyShowing: Map<string, Set<string>> = new Map()
	const [showing] = useState(emptyShowing)
	useEffect(() => {
		const currList: PaletteProps[] = []
		names.forEach(({ name, group }) => {
			const currGroup = palettesMap.get(group)
			if (currGroup === undefined) return
			const curr = currGroup.get(name)
			if (curr === undefined) return
			currList.push(curr)
		})
		setPalettes(currList)
		setUpdated(true)
	}, [updated])
	const addPalette = (group: string, name: string) => {
		const groupSet = showing.get(group) || new Set()
		if (groupSet.has(name)) return
		const currNames = names
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

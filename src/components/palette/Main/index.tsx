import { MainWrapper, Title } from "./Main.styled"
import Select from "../Select"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import PaletteProps from "../../../types/PaletteProps"
import PaletteInfoProps from "../../../types/PaletteInfoProps"
import palettesMap from "../../../constants/palettes"
import Palette from "../Palette"
import PaletteAnchors from "../PaletteAnchors"

const Main = () => {
	const emptyName: PaletteInfoProps[] = []
	const [updated, setUpdated] = useState(true)
	const [names, setNames] = useState(emptyName)
	const empty: PaletteProps[] = []
	const [palettes, setPalettes] = useState(empty)
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
		const currNames = names
		currNames.push({ group, name })
		setNames(currNames)
		setUpdated(false)
	}
	const { t } = useTranslation()
	return (
		<MainWrapper>
			<Title>{t("palettes.title")}</Title>
			<Select add={addPalette} />
			<PaletteAnchors list={names} />
			{palettes.map((palette, idx) => (
				<Palette
					info={names[idx]}
					key={`palette-idx-${idx}`}
					palette={palette}
				/>
			))}
		</MainWrapper>
	)
}

export default Main

import { useTheme } from "styled-components"
import {
	BrazilianMapWrapper,
	Title,
	Disclaimer,
	MapWrapper,
	MapSVG,
	Label,
	LabelWrapper,
	SelectWrapper,
	Select,
	Option
} from "./BrazilianMap.styled"
import palettesMap from "../../../constants/palettes"
import singlePath from "../../../../public/brazil-map-paths/single.json"
import { checkContrast } from "../../../lib/rgb"
import { ChangeEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import MulticoloredName from "../../common/MulticoloredName"
import PacManLoader from "../../common/Loading/PacManLoader"

const divisionMap = new Map([
	["cities", "../../../../brazil-map-paths/cities.json"],
	["micro", "../../../../brazil-map-paths/micro.json"],
	["meso", "../../../../brazil-map-paths/meso.json"],
	["UF", "../../../../brazil-map-paths/uf.json"],
	["region", "../../../../brazil-map-paths/region.json"],
	["single", "../../../../brazil-map-paths/single.json"]
])

const divisionPaths = new Map([["single", singlePath]])

const SelectDivision = ({
	defaultVal,
	handleChangeDivision
}: {
	defaultVal: string
	handleChangeDivision: (arg0: string) => void
}) => {
	const { t } = useTranslation()
	return (
		<LabelWrapper>
			<Label>{t("brasil.selects.division")}</Label>
			<Select
				onChange={({ target }) => handleChangeDivision(target.value)}
				defaultValue={defaultVal}
			>
				{Array.from(divisionMap.keys())
					.reverse()
					.map((value) => (
						<Option key={"option-division-" + value} value={value}>
							{t("brasil.divisions." + value)}
						</Option>
					))}
			</Select>
		</LabelWrapper>
	)
}

const filters = new Map([
	["no", 1],
	["minimum", 0.6],
	["AAbig", 1 / 3],
	["AAsmall", 1 / 4.5],
	["AAAsmall", 1 / 7]
])

const filterIds = new Map([
	[1, "no"],
	[0.6, "minimum"],
	[1 / 3, "AAbig"],
	[1 / 4.5, "AAsmall"],
	[1 / 7, "AAAsmall"]
])

const SelectTheme = ({
	changeName,
	changeFn,
	contrast,
	changeContrast
}: {
	changeName: (arg0: string) => void
	changeFn: (arg0: string[], arg1: number) => void
	contrast: number
	changeContrast: (arg0: number) => void
}) => {
	const { t } = useTranslation()
	const [group, setGroup] = useState("rainbow")
	const [groupNames] = useState(Array.from(palettesMap.keys()))
	const [palette, setPalette] = useState("rainbow monokai")
	const palettesInGroup = palettesMap.has(group)
		? palettesMap.get(group)
		: new Map()
	const palettesNames = Array.from(palettesInGroup?.keys() || [])
	const handleChangeTheme = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		setPalette(value)
		const colors = palettesInGroup?.get(value)
		changeFn(colors !== undefined ? colors : [], contrast)
		changeName(t(`palettes.names.${group}.${value}`))
	}
	const handleChangeContrast = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target
		changeContrast(Number.parseFloat(value))
	}
	return (
		<>
			<LabelWrapper>
				<Label id="select-theme-group">{t("brasil.selects.group")}</Label>
				<Select
					aria-labelledby="select-theme-group"
					onChange={({ target }) => {
						setGroup(target.value)
					}}
					defaultValue={group}
				>
					{groupNames.map((name, idx) => (
						<Option key={"palette-group-idx-" + idx} value={name}>
							{t("palettes.groups." + name)}
						</Option>
					))}
				</Select>
			</LabelWrapper>
			<LabelWrapper>
				<Label id="select-theme-in-group">{t("brasil.selects.palette")}</Label>
				<Select
					aria-labelledby="select-theme-in-group"
					onChange={(e) => handleChangeTheme(e)}
					defaultValue={palette}
				>
					{palettesNames.map((name) => (
						<Option key={"palette-option-" + name} value={name}>
							{t(`palettes.names.${group}.${name}`)}
						</Option>
					))}
				</Select>
			</LabelWrapper>
			<LabelWrapper>
				<Label>{t("brasil.selects.filter")}</Label>
				<Select
					aria-labelledby="select-theme-in-group"
					onChange={(e) => handleChangeContrast(e)}
					defaultValue={1}
				>
					{Array.from(filters.entries()).map(([id, value]) => (
						<Option key={"filter-option-" + id} value={value}>
							{t(`brasil.filters.${id}`)}
						</Option>
					))}
				</Select>
			</LabelWrapper>
		</>
	)
}

const BrazilianMap = () => {
	const { t } = useTranslation()
	const [loading, setLoading] = useState(false)
	const [paletteName, setPaletteName] = useState("")
	const [contrast, setContrast] = useState(1)
	const [contrastId, setContrastId] = useState(filterIds.get(1))
	const [division, setDivision] = useState("single")
	const [paths, setPaths] = useState(divisionPaths.get(division))
	const theme = useTheme()
	const empty: string[] = []
	const [rawColors, setRawColors] = useState(empty)
	const startColors = palettesMap.get("rainbow")?.get("rainbow monokai")
	const [colors, setColors] = useState(
		startColors !== undefined
			? startColors
			: [theme.primary, theme.blue, theme.pink]
	)
	const handleChangeDivision = async (newDivision: string) => {
		setLoading(true)
		if (divisionPaths.has(newDivision)) {
			const newPaths = divisionPaths.get(newDivision)
			setPaths(newPaths !== undefined ? newPaths : [])
			setDivision(newDivision)
			setLoading(false)
		} else {
			const url = divisionMap.get(newDivision)
			fetch(url !== undefined ? url : "").then((reponse) => {
				reponse.json().then((list) => {
					divisionPaths.set(newDivision, list)
					setPaths(list)
					setDivision(newDivision)
					setLoading(false)
				})
			})
		}
	}
	const cleanColors = (newColors: string[], newContrast: number) => {
		const cleanToUse = []
		const { background, primary } = theme
		for (const color of newColors) {
			if (checkContrast(background, color) <= newContrast) {
				cleanToUse.push(color)
			}
		}
		return cleanToUse.length > 0 ? cleanToUse : [primary]
	}
	const handleChangeColors = (newColors: string[], newContrast: number) => {
		if (newColors.length === 0) return
		setRawColors(newColors)
		const clean = cleanColors(newColors, newContrast)
		if (clean.length === 0) return
		setColors(clean)
	}
	const handleChangeContrast = (newContrast: number) => {
		setContrast(newContrast)
		setContrastId(filterIds.get(newContrast))
		handleChangeColors(rawColors, newContrast)
	}
	let size = colors.length
	return (
		<BrazilianMapWrapper>
			<Title>
				<MulticoloredName
					legible
					info={{ group: "rainbow", name: "rainbow monokai" }}
					isCustom
					customColors={colors}
				>
					{t("brasil.title")}
				</MulticoloredName>
			</Title>
			<Disclaimer $isOpen={colors[0] === theme.primary}>
				{t("brasil.disclaimer", {
					paletteName: paletteName,
					filterName: t("brasil.filters." + contrastId)
				})}
			</Disclaimer>
			<MapWrapper>
				{loading ? (
					<PacManLoader />
				) : (
					<MapSVG
						xmlns="http://www.w3.org/2000/svg"
						version="1.2"
						baseProfile="tiny"
						viewBox="-73.9904 -5.2718 44.691399999999994 39.0226"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<g id="BR" transform="scale(0.0001,-0.0001)">
							{paths !== undefined &&
								paths.map((path, idx) => (
									<path
										key={"path-idx-" + idx}
										fill={colors[idx % size]}
										d={path}
									/>
								))}
						</g>
					</MapSVG>
				)}
			</MapWrapper>
			<SelectWrapper>
				<SelectDivision
					handleChangeDivision={handleChangeDivision}
					defaultVal={division}
				/>
				<SelectTheme
					contrast={contrast}
					changeContrast={handleChangeContrast}
					changeFn={handleChangeColors}
					changeName={(name) => setPaletteName(name)}
				/>
			</SelectWrapper>
		</BrazilianMapWrapper>
	)
}

export default BrazilianMap

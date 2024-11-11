import {
	Title,
	Disclaimer,
	BrazilianMapWrapper,
	MapWrapper,
	SelectsWrapper,
	MapSVG
} from "./BrazilianMap.styled.ts"
import { useTheme } from "styled-components"
import BaseElement from "../../../types/common/BaseElementProps.ts"
import { MulticoloredName } from "../../common/MulticoloredName/client.tsx"
import { useState } from "react"
import { checkContrast } from "../../../lib/rgb"
import singlePath from "../../../../public/brazil-map-paths/single.json"
import { palettesMap } from "./../../../constants/palettes"
import { SelectTheme } from "./components/SelectTheme.tsx"
import { SelectDivision } from "./components/SelectDivision.tsx"

export const divisionMap = new Map([
	["cities", "/brazil-map-paths/cities.json"],
	["micro", "/brazil-map-paths/micro.json"],
	["meso", "/brazil-map-paths/meso.json"],
	["UF", "/brazil-map-paths/uf.json"],
	["region", "/brazil-map-paths/region.json"],
	["single", "/brazil-map-paths/single.json"]
])

const divisionPaths = new Map([["single", singlePath]])

export const filterIds = new Map([
	[1, "no"],
	[0.6, "minimum"],
	[1 / 3, "AAbig"],
	[1 / 4.5, "AAsmall"],
	[1 / 7, "AAAsmall"]
])

export const BrazilianMapBase = ({ t, lng }: BaseElement) => {
	const [loading, setLoading] = useState(false)
	const [paletteName, setPaletteName] = useState("")
	const [contrast, setContrast] = useState(1)
	const [contrastId, setContrastId] = useState(filterIds.get(1))
	const [division, setDivision] = useState("single")
	const [paths, setPaths] = useState(divisionPaths.get(division))
	const theme = useTheme()
	const empty: string[] = []
	const [rawColors, setRawColors] = useState(empty)
	const startPalette = palettesMap.get("rainbow")?.get("rainbow monokai")
	const [colors, setColors] = useState(
		startPalette !== undefined
			? startPalette.colors
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
	const selectStyle = {
		label: { bg: theme.purple, text: theme.almostBlack },
		select: {
			bg: theme.primary,
			text: theme.background,
			border: theme.accent
		}
	}
	return (
		<BrazilianMapWrapper>
			<Title>
				<MulticoloredName
					local="brasil"
					lng={lng}
					fontSize={40}
					legible
					info={{ group: "rainbow", name: "rainbow monokai" }}
					iconId="brasil"
					isCustom
					customColors={colors}
				>
					{t("title")}
				</MulticoloredName>
			</Title>
			<Disclaimer $isOpen={colors[0] === theme.primary}>
				{t("disclaimer", {
					paletteName: paletteName,
					filterName: t("filters." + contrastId)
				})}
			</Disclaimer>
			<MapWrapper>
				{loading ? (
					<MapSVG
						xmlns="http://www.w3.org/2000/svg"
						version="1.2"
						baseProfile="tiny"
						viewBox="-73.9904 -5.2718 44.691399999999994 39.0226"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<g id="BR" transform="scale(0.0001,-0.0001)">
							<path key={"path-idx-0"} fill={colors[0]} d={singlePath[0]} />
						</g>
					</MapSVG>
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
			<SelectsWrapper>
				<SelectTheme
					selectStyle={selectStyle}
					lng={lng}
					t={t}
					contrast={contrast}
					changeContrast={handleChangeContrast}
					changeFn={handleChangeColors}
					changeName={(name) => setPaletteName(name)}
				/>
				<SelectDivision
					selectStyle={selectStyle}
					handleChangeDivision={handleChangeDivision}
					defaultVal={division}
					lng={lng}
					t={t}
				/>
			</SelectsWrapper>
		</BrazilianMapWrapper>
	)
}

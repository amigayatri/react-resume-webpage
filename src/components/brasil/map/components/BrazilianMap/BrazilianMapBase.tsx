import {
	Title,
	Disclaimer,
	BrazilianMapWrapper,
	MapWrapper,
	SelectsWrapper,
	MapSVG
} from "./BrazilianMap.styled.ts"
import { useTheme } from "styled-components"
import { MulticoloredName } from "../../../../common/client.tsx"
import { useEffect, useState } from "react"
import singlePath from "../../../../../../public/brazil-map-paths/single.json"
import { SelectTheme, SelectDivision } from "./components/"
import {
	BrazilianMapBaseProps,
	handleTheme,
	changeContrast,
	handleChangeDivision
} from "./types.ts"
import {
	getNewInfo,
	getContrastInfo,
	getDivisionURL,
	cleanColors,
	generateSelectStyle
} from "./functions.ts"

const divisionPaths = new Map([["single", singlePath]])
type handlePaths = (arg0: string[], arg1: string) => void
type handleChangeColors = (newColors: string[], newContrast: number) => void

export const BrazilianMapBase = ({ t, lng }: BrazilianMapBaseProps) => {
	const [loading, setLoading] = useState(false)
	const [contrast, setContrast] = useState(getContrastInfo("1"))
	const [division, setDivision] = useState("single")
	const [paths, setPaths] = useState(divisionPaths.get(division))
	const theme = useTheme()
	const [selected, setSelected] = useState(
		getNewInfo("rainbow_rainbow monokai")
	)
	const [colors, setColors] = useState(selected.colors)
	const [rawColors, setRawColors] = useState(selected.colors)

	const handlePath: handlePaths = (newPaths, newDivision) => {
		setPaths(newPaths)
		setDivision(newDivision)
		setLoading(false)
	}

	const handleChangeDivision: handleChangeDivision = async (newDivision) => {
		setLoading(true)
		const newPaths = divisionPaths.get(newDivision)
		if (newPaths !== undefined) {
			handlePath(newPaths, newDivision)
			return
		}
		fetch(getDivisionURL(newDivision)).then((reponse) => {
			reponse.json().then((list) => {
				divisionPaths.set(newDivision, list)
				handlePath(list, newDivision)
			})
		})
	}
	const handleChangeColors: handleChangeColors = (newColors, newContrast) => {
		if (newColors.length === 0) return
		setRawColors(newColors)
		const { background, primary } = theme
		const clean = cleanColors(newColors, newContrast, { background, primary })
		if (clean.length === 0) return
		setColors(clean)
	}
	const handleTheme: handleTheme = (value) => {
		const newSelected = getNewInfo(value)
		const { colors } = newSelected
		setSelected(newSelected)
		handleChangeColors(colors, contrast.value)
	}
	const handleChangeContrast: changeContrast = (newContrastStr) => {
		const newContrast = getContrastInfo(newContrastStr)
		setContrast(newContrast)
		handleChangeColors(rawColors, newContrast.value)
	}

	let size = colors.length
	const selectStyle = generateSelectStyle(theme)

	useEffect(() => {
		handleChangeColors(rawColors, contrast.value)
	}, [theme.primary])
	return (
		<BrazilianMapWrapper>
			<Title>
				<MulticoloredName
					local="brasil"
					lng={lng}
					fontSize={40}
					legible
					info={{ group: selected.group, name: selected.name }}
					isCustom
					customColors={colors}
				>
					{t("title")}
				</MulticoloredName>
			</Title>
			<Disclaimer $isOpen={colors[0] === theme.primary}>
				{t("disclaimer", {
					paletteName: t(`names.${selected.group}.${selected.name}`),
					filterName: t("filters." + contrast.id)
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
					handleTheme={handleTheme}
					changeContrast={handleChangeContrast}
					selected={{ group: selected.group, name: selected.name }}
				/>
				<SelectDivision
					selectStyle={selectStyle}
					changeDivision={handleChangeDivision}
					defaultVal={division}
					lng={lng}
					t={t}
				/>
			</SelectsWrapper>
		</BrazilianMapWrapper>
	)
}

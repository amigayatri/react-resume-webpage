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
	handleChangeDivision,
	NewInfo
} from "./types.ts"
import {
	getNewInfo,
	getContrastInfo,
	getDivisionURL,
	ContrastChecker,
	generateSelectStyle
} from "./functions.ts"

const divisionPaths = new Map([["single", singlePath]])
type handlePaths = (arg0: string[], arg1: string) => void
type handleChangeColors = (
	newColors: string[],
	newInfo?: number | ContrastChecker | string
) => void

export const BrazilianMapBase = ({ t, lng }: BrazilianMapBaseProps) => {
	const [loading, setLoading] = useState(false)
	const [contrast, setContrast] = useState(getContrastInfo("1"))
	const [division, setDivision] = useState("single")
	const [paths, setPaths] = useState(divisionPaths.get(division))
	const theme = useTheme()
	const [selected, setSelected] = useState(
		getNewInfo("rainbow_rainbow monokai")
	)
	const selectedColors = selected !== undefined ? selected.colors : []
	const [colors, setColors] = useState(selectedColors)
	const [rawColors, setRawColors] = useState(selectedColors)
	const [checker, setChecker] = useState(new ContrastChecker(selectedColors))

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
	const handleChangeColors: handleChangeColors = (newColors, newInfo) => {
		if (newColors.length === 0) return
		setRawColors(newColors)
		let newContrast = contrast.value,
			newChecker = checker,
			newBg = theme.background
		if (typeof newInfo === "number") {
			newContrast = newInfo
		} else if (typeof newInfo === "string") {
			newBg = newInfo
		} else if (newInfo !== undefined) {
			newChecker = newInfo
			setChecker(newInfo)
		} else {
			return
		}
		const { primary } = theme
		const clean = newChecker.getCleanColors(newBg, newContrast)
		if (clean.length === 0) return [primary]
		setColors(clean)
	}
	const handleTheme: handleTheme = (value) => {
		const newSelected = getNewInfo(value)
		if (newSelected === undefined) return
		const { colors } = newSelected
		setSelected(newSelected)
		const newChecker = new ContrastChecker(colors)
		setChecker(newChecker)
		handleChangeColors(colors, newChecker)
	}
	const handleChangeContrast: changeContrast = (newContrastStr) => {
		const newContrast = getContrastInfo(newContrastStr)
		setContrast(newContrast)
		handleChangeColors(rawColors, newContrast.value)
	}

	let size = colors.length
	const selectStyle = generateSelectStyle(theme)

	useEffect(() => {
		handleChangeColors(rawColors, theme.background)
	}, [theme.primary])
	const emptyColors: string[] = []
	const cleanSelected: NewInfo =
		selected === undefined
			? {
					group: "rainbow",
					name: "rainbow monokai",
					colors: emptyColors
			  }
			: selected
	return (
		<BrazilianMapWrapper>
			<Title>
				<MulticoloredName
					local="brasil"
					lng={lng}
					fontSize={40}
					legible
					info={{ group: cleanSelected.group, name: cleanSelected.name }}
					isCustom
					customColors={colors}
				>
					{t("title")}
				</MulticoloredName>
			</Title>
			<Disclaimer $isOpen={colors[0] === theme.primary}>
				{t("disclaimer", {
					paletteName: t(`names.${cleanSelected.group}.${cleanSelected.name}`),
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
					selected={{ group: cleanSelected.group, name: cleanSelected.name }}
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

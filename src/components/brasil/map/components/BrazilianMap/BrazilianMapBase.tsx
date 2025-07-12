import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "styled-components"
import { Controls } from "../"
import singlePath from "../../../../../../public/brazil-map-paths/single.json"
import { useMyRouter } from "../../../../../hooks/"
import { groupKey, paletteKey } from "../../../../../types/palette/index.ts"
import { MulticoloredName } from "../../../../common/client.tsx"
import { BrazilianMap, contrastId, divisionType, getDivisionURL } from "../lib"
import { BrazilianMapBaseProps, handleChangeColors, handleChangeDivision } from "../types.ts"
import { BrazilianMapWrapper, Disclaimer, MapSVG, MapWrapper, Title } from "./BrazilianMap.styled.ts"

const divisionPaths = new Map([["single", singlePath]])
type handlePaths = (arg0: string[], arg1: string) => void

export const BrazilianMapBase = ({ t, lng }: BrazilianMapBaseProps) => {
    const [loading, setLoading] = useState(false)
    const [division, setDivision] = useState("single")
    const [paths, setPaths] = useState(divisionPaths.get(division))
    const theme = useTheme()
    const emptyStrs: string[] = []
    const [colors, setColors] = useState(emptyStrs)
    const searchParams = useSearchParams()
    const myRouter = useMyRouter()

    const getParams = () => {
        const currContrast = (myRouter.params.get("contrast") as contrastId) || "no"
        const currDivision = (myRouter.params.get("division") as divisionType) || "single"
        const currGroup = (myRouter.params.get("group") as groupKey) || "rainbow"
        const currPalette = (myRouter.params.get("palette") as paletteKey) || "rainbow monokai"
        return { contrast: currContrast, division: currDivision, group: currGroup, palette: currPalette }
    }

    const iniatilizeMap = () => {
        const paramsInfo = getParams()
        return new BrazilianMap(paramsInfo.contrast, paramsInfo.division, {
            group: paramsInfo.group,
            name: paramsInfo.palette
        })
    }

    const map = iniatilizeMap()

    const handlePath: handlePaths = (newPaths, newDivision) => {
        setPaths(newPaths)
        setDivision(newDivision)
        setLoading(false)
    }

    const handleChangeDivision: handleChangeDivision = async (newDivision) => {
        setLoading(true)
        map.controls.updateDivision(newDivision as divisionType)
        const newPaths = divisionPaths.get(newDivision)
        if (newPaths !== undefined) {
            handlePath(newPaths, newDivision)
            updateParams()
            return
        }
        fetch(getDivisionURL(newDivision)).then((reponse) => {
            reponse.json().then((list) => {
                divisionPaths.set(newDivision, list)
                handlePath(list, newDivision)
                updateParams()
            })
        })
    }

    const handleChangeColors: handleChangeColors = (newColors, newInfo) => {
        console.log("handling change", newColors)
        if (newColors.length === 0) return
        setColors(newColors)
        let newContrast = Number(map.controls.contrast.value),
            newChecker = map.getChecker(),
            newBg = theme.background
        if (typeof newInfo === "number") {
            newContrast = newInfo
        } else if (typeof newInfo === "string") {
            newBg = newInfo
        }
        const { primary } = theme
        const clean = newChecker.getCleanColors(newBg, newContrast)
        if (clean.length === 0) return [primary]
        setColors(clean)
    }

    const updateParams = () => {
        myRouter.params.set("contrast", map.controls.contrast.id)
        myRouter.params.set("division", map.controls.division)
        myRouter.params.set("group", map.controls.palette.group)
        myRouter.params.set("palette", map.controls.palette.name)
        myRouter.update()
    }

    let size = colors.length
    useEffect(() => {
        handleChangeColors(map.getChecker().rawColors, theme.background)
    }, [theme.primary])

    useEffect(() => {
        setColors(map.getChecker().rawColors)
        handleChangeColors(map.getChecker().rawColors, map.getChecker())
        handleChangeDivision(map.controls.division)
    }, [searchParams])

    return (
        <BrazilianMapWrapper>
            <Title>
                <MulticoloredName
                    local="brasil"
                    lng={lng}
                    fontSize={40}
                    legible
                    info={map.controls.palette}
                    isCustom
                    customColors={colors}
                >
                    {t("title")}
                </MulticoloredName>
            </Title>
            <Disclaimer $isOpen={colors[0] === theme.primary}>
                {t("disclaimer", {
                    paletteName: t(`names.${map.controls.palette.group}.${map.controls.palette.name}`),
                    filterName: t("filters." + map.controls.contrast.id)
                })}
            </Disclaimer>
            <MapWrapper>
                {loading ?
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
                :   <MapSVG
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
                                    <path key={"path-idx-" + idx} fill={colors[idx % size]} d={path} />
                                ))}
                        </g>
                    </MapSVG>
                }
            </MapWrapper>
            <Controls
                t={t}
                lng={lng}
                controls={map.controls}
                theme={theme}
                changeDivision={handleChangeDivision}
                updateParams={updateParams}
            />
        </BrazilianMapWrapper>
    )
}

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "styled-components"
import { AddColor, ColorList, ShadeList, TargetList } from "../"
import { Controller, createColor } from "../../../../../lib/colors/"
import { getPalette } from "../../../../../lib/palettes/"
import { ShadeGeneratorBaseProps, colorsMap } from "../types"
import { ShadeGeneratorWrapper } from "./ShadeGenerator.styled.ts"

type getPaletteColors = (group: string, palette: string) => string[]
type cleanParamArr = (id: string | null) => string[]

export const ShadeGeneratorBase = ({ lng, t }: ShadeGeneratorBaseProps) => {
    const startMap: colorsMap = new Map()
    const [colors, setColors] = useState(startMap)
    const [updatedList, setUpdatedList] = useState(true)
    const [controller, setController] = useState(new Controller())
    const [targets, setTargets] = useState(controller.targets.get())

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const newController = new Controller()
        setController(newController)
        setTargets(newController.targets.get())
        useParams()
        updateParams()
    }, [])

    const buildColorParams = () => {
        const keysArr = Array.from(colors.keys(), (key) => key.replace("#", ""))
        console.log(keysArr)
        return keysArr.join(",")
    }

    const updateParams = () => {
        const currParams = new URLSearchParams(searchParams)
        currParams.set("targets", controller.targets.getParams())
        currParams.set("steps", controller.steps.getParams())
        currParams.set("colors", buildColorParams())
        console.log(currParams.toString())
        router.push(`${pathname}?${currParams.toString()}`)
    }

    const getCleanParamArr: cleanParamArr = (paramStr) => {
        const empty: string[] = []
        if (paramStr === null) return empty
        const paramArr = paramStr.split(",")
        return paramArr.map((code) => `#${code}`)
    }

    const getParams = () => {
        const currParams = new URLSearchParams(searchParams)
        return {
            steps: currParams.has("steps") ? Number(currParams.get("steps")) : 4,
            targets: getCleanParamArr(currParams.get("targets")),
            colors: getCleanParamArr(currParams.get("colors"))
        }
    }

    const useParams = () => {
        const paramInfo = getParams()
        controller.steps.set(paramInfo.steps)
        controller.targets.addList(paramInfo.targets)
        paramInfo.colors.forEach(addColor)
        console.log(paramInfo)
    }

    const addColor = (code: string) => {
        code = code.toUpperCase()
        if (colors.has(code)) return
        const colorsSet = colors
        const newColor = createColor(code)
        if (!newColor) return
        colorsSet.set(code, newColor)
        setColors(colorsSet)
        setUpdatedList(false)
        updateParams()
    }

    const getPaletteColors: getPaletteColors = (group, palette) => {
        const empty: string[] = []
        const selectedPalette = getPalette(group, palette)
        if (selectedPalette === undefined) return empty
        return selectedPalette.colors
    }
    const addPalette = (group: string, palette: string) => {
        for (const color of getPaletteColors(group, palette)) {
            addColor(color)
        }
    }

    const addPaletteAsTarget = (group: string, palette: string) => {
        if (!updatedList) setUpdatedList(true)
        for (const color of getPaletteColors(group, palette)) {
            controller.targets.add(color)
        }
        setTargets(controller.targets.get())
        updateParams()
    }

    const removeColor = (code: string) => {
        const colorsSet = colors
        colorsSet.delete(code)
        setColors(colorsSet)
        setUpdatedList(false)
        updateParams()
    }
    const regenerateTargets = () => {
        if (!updatedList) setUpdatedList(true)
        const newTargets = controller.targets.get()
        setTargets(newTargets)
        updateParams()
    }
    const regenerateColors = () => {
        for (const color of colors.values()) {
            color.regenerateVariations()
        }
        regenerateTargets()
    }
    const generateCodeList = () => {
        if (!updatedList) setUpdatedList(true)
        if (colors.size == 0) return []
        const res = []
        for (const color of colors.values()) {
            res.push({
                color: { code: color.code, inverse: color.palette.inverse },
                remove: (code: string) => removeColor(code)
            })
        }
        return res
    }
    const generateColorList = () => {
        if (!updatedList) setUpdatedList(true)
        if (colors.size === 0) return []
        return Array.from(colors.values())
    }
    const theme = useTheme()
    const titleColors = [theme.red, theme.pink, theme.purple, theme.blue]

    return (
        <ShadeGeneratorWrapper>
            <AddColor
                controller={controller}
                regenerate={regenerateColors}
                add={addColor}
                lng={lng}
                t={t}
                titleColor={titleColors[0]}
                colors={titleColors}
            />
            <TargetList
                controller={controller}
                addPalette={addPaletteAsTarget}
                targets={targets}
                regenerate={regenerateTargets}
                updatedList={updatedList}
                lng={lng}
                t={t}
                titleColor={titleColors[1]}
            />
            <ColorList
                addPalette={addPalette}
                colors={colors}
                updatedList={updatedList}
                regenerate={generateCodeList}
                lng={lng}
                t={t}
                titleColor={titleColors[2]}
            />
            <ShadeList
                updatedList={updatedList}
                regenerate={generateColorList}
                lng={lng}
                t={t}
                titleColor={titleColors[3]}
            />
        </ShadeGeneratorWrapper>
    )
}

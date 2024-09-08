import { MainWrapper } from "./Styles";
import { ColorList } from "../ColorList/ColorList";
import { AddColor } from "../AddColor/AddColor";
import { useState } from "react";
import {Color} from '../../../lib/colors'
import { ShadeList } from "../ShadeList/ShadeList";

export const Main = ( ) => {
    const [colors, setColors] = useState(new Map<string, Color>())
    const [updatedList, setUpdatedList] = useState(true)

    const addColor = (code: string) => {
        code = code.toUpperCase()
        if (colors.has(code)) return
        const colorsSet = colors
        colorsSet.set(code, new Color(code))
        setColors(colorsSet)
        setUpdatedList(false)
    }

    const removeColor = (code: string) => {
        const colorsSet = colors        
        colorsSet.delete(code)
        setColors(colorsSet)
        setUpdatedList(false)
    }

    const regenerateColors = () => {
        for (const color of colors.values()) {
            color.regenerateVariations()
        }
    }

    const generateCodeList = () => {
        if (!updatedList) setUpdatedList(true)
        if (colors.size == 0) return []
        const res = []
        for (const color of colors.values()) {
            res.push({color: {code: color.code, inverse: color.palette.inverse}, remove: (code: string) => removeColor(code)})
        }
        return res
    }
    const generateColorList = () => {
        if (!updatedList) setUpdatedList(true)
        if (colors.size == 0) return []
        return Array.from(colors.values())
    }
    return (
        <MainWrapper>
            <AddColor regenerate={regenerateColors} add={addColor}></AddColor>
            <ColorList colors={colors} updatedList={updatedList} regenerate = {generateCodeList} />
            <ShadeList updatedList={updatedList} regenerate={generateColorList}/>
        </MainWrapper>
    );
}
import { DefaultTheme } from "styled-components"
import { SelectStyleProps } from "../../../../../types/common"

const defaultColors = {
    almostBlack: "#212117",
    white: "#f7f7f7",
    purple: "#ac80ff",
    pink: "#f92472",
    blue: "#67d8ef"
}

type isString = (arg0?: string) => arg0 is string
const isString: isString = (val) => typeof val === "string"

const defaultStyle: SelectStyleProps = {
    label: {
        bg: defaultColors.purple,
        text: defaultColors.almostBlack
    },
    select: {
        bg: defaultColors.white,
        text: defaultColors.almostBlack,
        border: defaultColors.pink
    }
}
type generateSelectStyle = (arg0: DefaultTheme) => SelectStyleProps

export const generateSelectStyle: generateSelectStyle = (theme) => {
    const { purple, almostBlack, primary, background, accent } = theme
    const { label, select } = defaultStyle
    return {
        label: {
            bg: isString(purple) ? purple : label.bg,
            text: isString(almostBlack) ? almostBlack : label.text
        },
        select: {
            bg: isString(primary) ? primary : select.bg,
            text: isString(background) ? background : select.text,
            border: isString(accent) ? accent : select.border
        }
    }
}

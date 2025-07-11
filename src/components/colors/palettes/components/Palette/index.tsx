import { useState } from "react"
import { Trans } from "react-i18next/TransWithoutContext"
import { sortColors } from "../../../../../lib/colors/"
import { MulticoloredName } from "../../../../common/client"
import { Summary } from "../Common.styled"
import { Control } from "../Control"
import { PaletteElementProps } from "../types"
import {
    ButtonWrapper,
    ColorCode,
    Description,
    NormalText,
    PaletteColor,
    PaletteName,
    PaletteSection,
    PaletteWrapper,
    SubTitle
} from "./Palette.styled"

export const Palette = ({ palette, info, t, lng, remove }: PaletteElementProps) => {
    if (info === undefined) return
    const { group, name } = info
    const [showSorted, setShowSorted] = useState(false)
    const [ascending, setAscending] = useState(false)
    const id = `${group}-${name}`.replace(" ", "_")
    const stringify = (str: string) => `"${str}"`
    const codes: string[] = Array.from(palette.colors, stringify)
    const sorted = sortColors(palette.colors)
    const sortedCodes: string[] = Array.from(sorted, stringify)
    const allCodes =
        !showSorted ?
            `[${codes.join(", ")}]`
        :   `[${ascending ? sortedCodes.join(", ") : sortedCodes.reverse().join(", ")}]`

    const showColor = (color: string) => {
        return (
            <PaletteColor
                onClick={() => navigator.clipboard.writeText(color)}
                key={"color-" + color}
                style={{ backgroundColor: color }}
            >
                <ColorCode>{color}</ColorCode>
            </PaletteColor>
        )
    }
    return (
        <PaletteSection id={id}>
            <PaletteName>
                <Trans t={t} i18nKey="component" tOptions={{ paletteName: t(`names.${group}.${name}`) }}>
                    t<NormalText>s</NormalText>
                    <MulticoloredName
                        local="palette"
                        lng={lng}
                        iconId={palette.icon || "pantone"}
                        fontSize={24}
                        legible={false}
                        info={info}
                    >
                        n
                    </MulticoloredName>
                </Trans>
            </PaletteName>
            <Description>
                <Summary>{t("info.summary")}</Summary>
                <ButtonWrapper>
                    <Control
                        t={t}
                        lng={lng}
                        sortedState={[showSorted, setShowSorted]}
                        ascendingState={[ascending, setAscending]}
                        allCodes={allCodes}
                        info={info}
                        remove={remove}
                    />
                </ButtonWrapper>
            </Description>
            <SubTitle>{t(`info.order.${showSorted ? "sorted" : "original"}`)}</SubTitle>
            <PaletteWrapper>
                {!showSorted ?
                    palette.colors.map(showColor)
                : ascending ?
                    sorted.map(showColor)
                :   sorted.reverse().map(showColor)}
            </PaletteWrapper>
        </PaletteSection>
    )
}

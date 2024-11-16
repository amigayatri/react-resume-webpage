import {
	PaletteWrapper,
	PaletteColor,
	ColorCode,
	PaletteName,
	NormalText,
	PaletteSection,
	Description,
	CopyPalette,
	SubTitle,
	ControlButton,
	ControlWrapper,
	ButtonWrapper
} from "./Palette.styled"
import { Trans } from "react-i18next/TransWithoutContext"
import { Summary } from "../Common.styled"
import { MulticoloredName, SVGIcon } from "../../../../common/client"
import { sortColors } from "../../../../../lib/colors/"
import { useState } from "react"
import { PaletteElementProps } from "../types"

export const Palette = ({ palette, info, t, lng }: PaletteElementProps) => {
	const { group, name } = info
	const [showSorted, setShowSorted] = useState(false)
	const [ascending, setAscending] = useState(false)
	const id = `${group}-${name}`.replace(" ", "_")
	const stringify = (str: string) => `"${str}"`
	const codes: string[] = Array.from(palette.colors, stringify)
	const sorted = sortColors(palette.colors)
	const sortedCodes: string[] = Array.from(sorted, stringify)
	const allCodes = !showSorted
		? `[${codes.join(", ")}]`
		: `[${
				ascending ? sortedCodes.join(", ") : sortedCodes.reverse().join(", ")
		  }]`

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
				<Trans
					t={t}
					i18nKey="component"
					tOptions={{ paletteName: t(`names.${group}.${name}`) }}
				>
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
					<ControlWrapper>
						<ControlButton
							$selected={!showSorted}
							onClick={() => {
								setShowSorted(false)
							}}
						>
							<SVGIcon lng={lng} local="palette" size={32} id="listunordered" />
						</ControlButton>
						<ControlButton
							$selected={showSorted && ascending}
							onClick={() => {
								setShowSorted(true)
								if (!ascending) {
									setAscending(true)
								}
							}}
						>
							<SVGIcon
								lng={lng}
								local="palette"
								size={32}
								id="listsortedascending"
							/>
						</ControlButton>
						<ControlButton
							$selected={showSorted && !ascending}
							onClick={() => {
								setShowSorted(true)
								if (ascending) {
									setAscending(false)
								}
							}}
						>
							<SVGIcon
								lng={lng}
								local="palette"
								size={32}
								id="listsorteddescending"
							/>
						</ControlButton>
					</ControlWrapper>
					<CopyPalette onClick={() => navigator.clipboard.writeText(allCodes)}>
						<MulticoloredName
							lng={lng}
							local="palette"
							iconId="copy"
							fontSize={16}
							legible
							info={info}
						>
							{t("info.copy all")}
						</MulticoloredName>
					</CopyPalette>
				</ButtonWrapper>
			</Description>
			<SubTitle>
				{t(`info.order.${showSorted ? "sorted" : "original"}`)}
			</SubTitle>
			<PaletteWrapper>
				{!showSorted
					? palette.colors.map(showColor)
					: ascending
					? sorted.map(showColor)
					: sorted.reverse().map(showColor)}
			</PaletteWrapper>
		</PaletteSection>
	)
}

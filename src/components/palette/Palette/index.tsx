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
import PaletteType from "../../../types/PaletteProps"
import PaletteInfoProps from "../../../types/PaletteInfoProps"
import { useTranslation, Trans } from "react-i18next"
import { Summary } from "../Common.styled"
import MulticoloredName from "../../common/MulticoloredName"
import SVGIcon from "../../../icons/SVGIcon"
import palettesIcons from "../../../constants/palettes-icons"
import { sortColors } from "../../../lib/rgb"
import { useState } from "react"
interface PaletteProps {
	palette: PaletteType
	info: PaletteInfoProps
}

const Palette = ({ palette, info }: PaletteProps) => {
	const { t } = useTranslation()
	const { group, name } = info
	const [showSorted, setShowSorted] = useState(false)
	const [ascending, setAscending] = useState(false)
	const iconId = palettesIcons.custom.has(name)
		? palettesIcons.custom.get(name)
		: palettesIcons.group.get(group)
	const id = `${group}-${name}`.replace(" ", "_")
	const stringify = (str: string) => `"${str}"`
	const codes: string[] = Array.from(palette, stringify)
	const sorted = sortColors(palette)
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
					i18nKey="palettes.component"
					tOptions={{ paletteName: t(`palettes.names.${group}.${name}`) }}
				>
					t<NormalText>s</NormalText>
					<MulticoloredName
						iconId={iconId || "pantone"}
						fontSize={24}
						legible={false}
						info={info}
					>
						n
					</MulticoloredName>
				</Trans>
			</PaletteName>
			<Description>
				<Summary>{t("palettes.info.summary")}</Summary>
				<ButtonWrapper>
					<ControlWrapper>
						<ControlButton
							$selected={!showSorted}
							onClick={() => {
								setShowSorted(false)
							}}
						>
							<SVGIcon local="palette" size={32} id="listunordered" />
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
							<SVGIcon local="palette" size={32} id="listsortedascending" />
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
							<SVGIcon local="palette" size={32} id="listsorteddescending" />
						</ControlButton>
					</ControlWrapper>
					<CopyPalette onClick={() => navigator.clipboard.writeText(allCodes)}>
						<MulticoloredName iconId="copy" fontSize={16} legible info={info}>
							{t("palettes.info.copy all")}
						</MulticoloredName>
					</CopyPalette>
				</ButtonWrapper>
			</Description>
			<SubTitle>
				{t(`palettes.info.order.${showSorted ? "sorted" : "original"}`)}
			</SubTitle>
			<PaletteWrapper>
				{!showSorted
					? palette.map(showColor)
					: ascending
					? sorted.map(showColor)
					: sorted.reverse().map(showColor)}
			</PaletteWrapper>
		</PaletteSection>
	)
}

export default Palette

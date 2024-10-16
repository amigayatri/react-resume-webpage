import {
	PaletteWrapper,
	PaletteColor,
	ColorCode,
	PaletteName,
	PaletteSection,
	Description,
	CopyPalette
} from "./Palette.styled"
import PaletteType from "../../../types/PaletteProps"
import PaletteInfoProps from "../../../types/PaletteInfoProps"
import { useTranslation, Trans } from "react-i18next"
import { Summary } from "../Common.styled"
import MulticoloredName from "../MulticoloredName"

interface PaletteProps {
	palette: PaletteType
	info: PaletteInfoProps
}

const Palette = ({ palette, info }: PaletteProps) => {
	const { t } = useTranslation()
	const { group, name } = info
	const id = `${group}-${name}`.replace(" ", "_")
	const codes: string[] = Array.from(palette, (code) => `"${code}"`)
	const allCodes = `[${codes.join(", ")}]`
	return (
		<PaletteSection id={id}>
			<PaletteName>
				<Trans
					i18nKey="palettes.component"
					tOptions={{ paletteName: t(`palettes.names.${group}.${name}`) }}
				>
					t
					<MulticoloredName legible={false} info={info}>
						n
					</MulticoloredName>
					t
				</Trans>
			</PaletteName>
			<Description>
				<Summary>{t("palettes.info.summary")}</Summary>
				<CopyPalette onClick={() => navigator.clipboard.writeText(allCodes)}>
					<MulticoloredName legible info={info}>
						{t("palettes.info.copy all")}
					</MulticoloredName>
				</CopyPalette>
			</Description>
			<PaletteWrapper>
				{palette.map((color) => (
					<PaletteColor
						onClick={() => navigator.clipboard.writeText(color)}
						key={"color-" + color}
						style={{ backgroundColor: color }}
					>
						<ColorCode>{color}</ColorCode>
					</PaletteColor>
				))}
			</PaletteWrapper>
		</PaletteSection>
	)
}

export default Palette

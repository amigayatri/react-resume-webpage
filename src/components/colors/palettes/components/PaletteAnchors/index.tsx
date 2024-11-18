import { Subtitle, Summary } from "../Common.styled"
import {
	PaletteAnchorsWrapper,
	Anchor,
	AnchorList,
	Item
} from "./PaletteAnchors.styled"
import { MulticoloredName } from "../../../../common/client"
import { getPalette } from "../../../../../lib/palettes"
import { PaletteAnchorsProps } from "../types"

export const PaletteAnchors = ({ list, t, lng }: PaletteAnchorsProps) => {
	return (
		<PaletteAnchorsWrapper>
			<Subtitle>{t("list.title")}</Subtitle>
			<Summary>{t("list.summary")}</Summary>
			<AnchorList>
				{list.map(({ group, name }, idx) => {
					const id = `${group}-${name}`.replace(" ", "_")
					const newPalette = getPalette(group, name)
					if (newPalette === undefined) return
					const iconId = newPalette.icon
					return (
						<Item key={"palette-anchor-idx-" + idx}>
							<Anchor href={`#${id}`}>
								<MulticoloredName
									local="palette"
									lng={lng}
									fontSize={20}
									iconId={iconId}
									legible
									info={{ group, name }}
								>
									{t(`names.${group}.${name}`)}
								</MulticoloredName>
							</Anchor>
						</Item>
					)
				})}
			</AnchorList>
		</PaletteAnchorsWrapper>
	)
}

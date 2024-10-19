import { useTranslation } from "react-i18next"
import PaletteInfoProps from "../../../types/PaletteInfoProps"
import { Subtitle, Summary } from "../Common.styled"
import {
	PaletteAnchorsWrapper,
	Anchor,
	AnchorList,
	Item
} from "./PaletteAnchors.styled"
import MulticoloredName from "../../common/MulticoloredName"

interface PaletteAnchorsProps {
	list: PaletteInfoProps[]
}

const PaletteAnchors = ({ list }: PaletteAnchorsProps) => {
	const { t } = useTranslation()
	return (
		<PaletteAnchorsWrapper>
			<Subtitle>{t("palettes.list.title")}</Subtitle>
			<Summary>{t("palettes.list.summary")}</Summary>
			<AnchorList>
				{list.map(({ group, name }, idx) => {
					const id = `${group}-${name}`.replace(" ", "_")
					return (
						<Item key={"palette-anchor-idx-" + idx}>
							<Anchor href={`#${id}`}>
								<MulticoloredName legible info={{ group, name }}>
									{t(`palettes.names.${group}.${name}`)}
								</MulticoloredName>
							</Anchor>
						</Item>
					)
				})}
			</AnchorList>
		</PaletteAnchorsWrapper>
	)
}

export default PaletteAnchors

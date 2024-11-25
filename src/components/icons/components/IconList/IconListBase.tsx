import {
	IconListWrapper,
	List,
	IconItem,
	Id,
	Icon,
	IconLink
} from "./IconList.styled"
import { iconsIds } from "../../../../constants/icons.ts"
import { getSafePaletteColors } from "../../../../lib/palettes/"
import { SVGIcon, MulticoloredName } from "../../../common/client"
import { IconListBaseProps } from "../../types"
import { SectionTitle } from "../Common.styled.ts"

const rainbowMonokai = getSafePaletteColors("rainbow", "rainbow monokai")

export const IconListBase = ({ lng, t }: IconListBaseProps) => {
	return (
		<IconListWrapper>
			<SectionTitle>
				<MulticoloredName
					local="icons"
					info={{ group: "rainbow", name: "rainbow monokai" }}
					fontSize={24}
					legible
					lng={lng}
				>
					{t("all.title")}
				</MulticoloredName>
			</SectionTitle>
			<List>
				{iconsIds.map((id, idx) => (
					<IconItem key={"icon-with-id-" + id}>
						<IconLink href={`/${lng}/icons/details/${id}`}>
							id: <Id>{id}</Id>
							<Icon
								style={{
									color: rainbowMonokai[
										idx % rainbowMonokai.length
									]
								}}
							>
								<SVGIcon
									lng={lng}
									local="iconlist"
									id={id}
									size={48}
								/>
							</Icon>
						</IconLink>
					</IconItem>
				))}
			</List>
		</IconListWrapper>
	)
}

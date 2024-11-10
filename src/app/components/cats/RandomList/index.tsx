import { ListWrapper, List, Item, Img, Title } from "./RandomList.styled"
import { MulticoloredName } from "../../common/MulticoloredName/client.tsx"
import { RandomListProps } from "../types.ts"

const RandomList = ({
	list,
	id,
	controls,
	iconId,
	lng,
	t,
	idx
}: RandomListProps) => {
	const { size } = controls
	return (
		<ListWrapper id={id + "-list"}>
			<Title>
				<MulticoloredName
					local="cats"
					legible
					legibleTextColors
					fontSize={32}
					info={{ group: "theme", name: "current" }}
					lng={lng}
					iconId={iconId}
					isCustom
					customColors={
						(idx & 1) === 1 ? ["#f92472", "#67d8ef"] : ["#67d8ef", "#f92472"]
					}
				>
					{t(`list.${id}.one`)}
				</MulticoloredName>
			</Title>
			<List $width={size}>
				{list.map((url, idx) => (
					<Item key={id + "-idx-" + idx}>
						<Img src={url} />
					</Item>
				))}
			</List>
		</ListWrapper>
	)
}

export default RandomList

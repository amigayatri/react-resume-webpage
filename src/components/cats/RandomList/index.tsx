import { ListWrapper, List, Item, Img, Title } from "./RandomList.styled"
import { MulticoloredName } from "../../common/MulticoloredName/client.tsx"
import { RandomListProps } from "../types.ts"
import { useTheme } from "styled-components"

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
	const { pink, blue } = useTheme()
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
					customColors={(idx & 1) === 1 ? [pink, blue] : [blue, pink]}
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

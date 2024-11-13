import { ListsWrapper } from "./PicturesLists.styled.ts"
import { RandomList } from "../RandomList"
import { PicturesListsProps } from "../types.ts"

export const PicturesLists = ({
	lng,
	controls,
	pictures,
	t
}: PicturesListsProps) => {
	const { hideEmpty } = controls
	let validIdx = 0
	return (
		<ListsWrapper id="lists-wrapper">
			{pictures.map(([id, { list, icons }]) => {
				if (hideEmpty && list.length === 0) return
				validIdx++
				return (
					<RandomList
						idx={validIdx - 1}
						lng={lng}
						t={t}
						controls={controls}
						key={"obj-list-" + id}
						id={id}
						iconId={icons[0]}
						list={list}
					/>
				)
			})}
		</ListsWrapper>
	)
}

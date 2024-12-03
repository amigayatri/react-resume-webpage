import { getPresentStates } from "../functions"
import { State } from "../State"
import { PresentListProps } from "../types"
import { PresentListWrapper, Title, ListWrapper } from "./PresentList.styled"

export const PresentList = ({ t, lng }: PresentListProps) => {
	const stateList = getPresentStates()
	return (
		<PresentListWrapper>
			<Title>Feriados municipais adicionados</Title>
			<ListWrapper>
				{stateList.map((state, idx) => {
					const props = {
						t,
						lng,
						idx,
						state
					}
					return <State {...props} />
				})}
			</ListWrapper>
		</PresentListWrapper>
	)
}

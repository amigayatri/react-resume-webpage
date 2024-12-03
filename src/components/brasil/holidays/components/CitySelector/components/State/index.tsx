import { Name, StateItem, StateList } from "./State.styled"
import { StateProps } from "../types"
import { City } from "../City"
import { getPresentCities } from "../functions"

export const State = ({ state, lng, t }: StateProps) => {
	const presentArr = getPresentCities(state)
	return (
		<StateItem>
			<Name>{state}</Name>
			<StateList>
				{presentArr.map(([name, qtty], idx) => {
					const props = {
						name,
						qtty,
						idx,
						t,
						lng
					}
					return <City {...props} />
				})}
			</StateList>
		</StateItem>
	)
}

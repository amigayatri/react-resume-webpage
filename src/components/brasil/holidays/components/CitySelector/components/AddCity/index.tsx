import { AddCityWrapper } from "./AddCity.styled"
import { AddCityProps } from "../types"
import { AddButton, ChooseCity } from "../"
import { useState } from "react"
import { unsetValue } from "../constants"
import { getNewHolidays } from "../functions"

export const AddCity = ({ addDates, t, lng }: AddCityProps) => {
	const props = { t, lng }
	const statePair = useState(unsetValue)
	const cityPair = useState(unsetValue)
	const [city] = cityPair
	const [state] = statePair

	const handleAdd = () => {
		getNewHolidays(state, city).then((newHolidays) => {
			addDates(newHolidays)
		})
	}

	return (
		<AddCityWrapper>
			<ChooseCity {...props} cityPair={cityPair} statePair={statePair} />
			<AddButton
				{...props}
				cityName={city}
				stateName={state}
				handleAdd={handleAdd}
			/>
		</AddCityWrapper>
	)
}

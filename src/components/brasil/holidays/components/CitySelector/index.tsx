import { CitySelectorProps } from "../../types.ts"
import { useState } from "react"
import { CitySelectorWrapper, CitiesWrapper } from "./CitySelector.styled.ts"
import { NewHolidays } from "./functions.ts"
import { OpenButton, PresentList, AddCity } from "./components/"

export const CitySelector = ({
	t,
	lng,
	thisYearState,
	nextYearState
}: CitySelectorProps) => {
	const [open, setOpen] = useState(false)
	const [thisYearList, setThisYearList] = thisYearState
	const [nextYearList, setNextYearList] = nextYearState

	const addHolidays = (newDates: NewHolidays) => {
		newDates.thisYear.push(...thisYearList)
		newDates.nextYear.push(...nextYearList)
		setThisYearList(newDates.thisYear)
		setNextYearList(newDates.nextYear)
	}

	const props = {
		t,
		lng
	}
	return (
		<CitySelectorWrapper>
			<OpenButton {...props} openState={[open, setOpen]} />
			<CitiesWrapper $isOpen={open}>
				<AddCity {...props} addDates={addHolidays} />
				<PresentList {...props} />
			</CitiesWrapper>
		</CitySelectorWrapper>
	)
}

import { Header, Line, Spiral, Day } from "./CalendarHeader.styled"
import { CalendarProps } from "../../../../../../../types"

export const CalendarHeader = ({ day }: Partial<CalendarProps>) => {
	return (
		<Header>
			<Spiral />
			<Spiral />
			<Day>{day}</Day>
			<Line />
		</Header>
	)
}

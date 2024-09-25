import { DayWrapper, ContentWrapper } from "./Day.styled"
import DayProps from "../../../../types/DayProps"
import CalendarSymbol from "./CalendarSymbol"

const Day = ({ exercises, color }: DayProps) => {
	return (
		<DayWrapper>
			<ContentWrapper>
				<CalendarSymbol color={color} exercises={exercises} />
			</ContentWrapper>
		</DayWrapper>
	)
}

export default Day

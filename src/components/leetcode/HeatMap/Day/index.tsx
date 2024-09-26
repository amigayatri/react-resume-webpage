import { DayWrapper, ContentWrapper } from "./Day.styled"
import DayProps from "../../../../types/DayProps"
import CalendarSymbol from "./CalendarSymbol"

const Day = ({ exercises, color, day }: DayProps) => {
	return (
		<DayWrapper>
			<ContentWrapper>
				<CalendarSymbol
					day={day.getDate()}
					color={color}
					exercises={exercises}
				/>
			</ContentWrapper>
		</DayWrapper>
	)
}

export default Day

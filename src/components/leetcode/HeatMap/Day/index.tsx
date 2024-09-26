import { DayWrapper, ContentWrapper, SimpleDay } from "./Day.styled"
import DayProps from "../../../../types/DayProps"
import CalendarSymbol from "./CalendarSymbol"

const Day = ({ exercises, color, day, simple }: DayProps) => {
	return (
		<DayWrapper>
			{simple ? (
				<SimpleDay $color={color} />
			) : (
				<ContentWrapper>
					<CalendarSymbol
						day={day.getDate()}
						color={color}
						exercises={exercises}
					/>
				</ContentWrapper>
			)}
		</DayWrapper>
	)
}

export default Day

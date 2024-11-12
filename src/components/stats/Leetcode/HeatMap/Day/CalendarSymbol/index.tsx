import { CalendarSymbolWrapper } from "./CalendarSymbol.styled"
import { CalendarSymbolProps } from "../../../../../../types/leetcode"
import { CalendarHeader, CalendarPage } from "./components/"

export const CalendarSymbol = ({
	exercises,
	color,
	day
}: CalendarSymbolProps) => {
	return (
		<CalendarSymbolWrapper $color={color} tabIndex={1}>
			<CalendarHeader day={day} />
			<CalendarPage exercises={exercises} />
		</CalendarSymbolWrapper>
	)
}

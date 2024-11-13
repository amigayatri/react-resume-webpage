import { CalendarSymbolWrapper } from "./CalendarSymbol.styled"
import { CalendarHeader, CalendarPage } from "./components/"
import { CalendarSymbolProps } from "../../../../../types"

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

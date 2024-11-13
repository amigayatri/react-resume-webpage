import { DayWrapper, ContentWrapper, SimpleDay } from "./Day.styled"
import { CalendarSymbol } from "./CalendarSymbol"
import { DayProps } from "../../../../types"

export const Day = ({ exercises, color, day, isSimple, isDark }: DayProps) => {
	const { light, dark } = color
	return (
		<DayWrapper>
			{isSimple ? (
				<SimpleDay $color={isDark ? dark : light} />
			) : (
				<ContentWrapper>
					<CalendarSymbol
						day={day.getDate()}
						color={isDark ? dark : light}
						exercises={exercises}
					/>
				</ContentWrapper>
			)}
		</DayWrapper>
	)
}

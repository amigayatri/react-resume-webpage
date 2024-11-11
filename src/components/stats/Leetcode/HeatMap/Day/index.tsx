import { DayWrapper, ContentWrapper, SimpleDay } from "./Day.styled"
import { DayProps } from "../../../../../types/leetcode/"
import { CalendarSymbol } from "./CalendarSymbol"

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

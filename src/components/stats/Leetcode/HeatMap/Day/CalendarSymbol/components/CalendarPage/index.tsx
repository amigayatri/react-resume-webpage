import { Page, Exercises, ExercisesWrapper } from "./CalendarPage.styled"
import { CalendarProps } from "../../../../../../../../types/leetcode"
import { Face } from "../Face"

export const CalendarPage = ({ exercises }: Partial<CalendarProps>) => {
	return (
		<Page>
			<Face isSad={exercises === 0} />
			<ExercisesWrapper>
				<Exercises>{exercises}</Exercises>
			</ExercisesWrapper>
		</Page>
	)
}

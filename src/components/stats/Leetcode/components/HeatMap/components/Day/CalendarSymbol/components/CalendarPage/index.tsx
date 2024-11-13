import { Page, Exercises, ExercisesWrapper } from "./CalendarPage.styled"
import { CalendarProps } from "../../../../../../../types"
import { Face } from "../"

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

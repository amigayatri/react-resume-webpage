import {
	CalendarSymbolWrapper,
	Header,
	Line,
	Page,
	Spiral,
	Day,
	EyesContainer,
	FaceWrapper,
	Eyes,
	Smile,
	MouthWrapper,
	SadMouth,
	Exercises,
	ExercisesWrapper
} from "./CalendarSymbol.styled"

interface CalendarProps {
	exercises: number
	day: number
}

const CalendarHeader = ({ day }: Partial<CalendarProps>) => {
	return (
		<Header>
			<Spiral />
			<Spiral />
			<Day>{day}</Day>
			<Line />
		</Header>
	)
}

const Face = ({ isSad }: { isSad: boolean }) => {
	return (
		<FaceWrapper>
			<EyesContainer>
				<Eyes />
				<Eyes />
			</EyesContainer>
			<MouthWrapper>{isSad ? <SadMouth /> : <Smile />}</MouthWrapper>
		</FaceWrapper>
	)
}

const CalendarPage = ({ exercises }: Partial<CalendarProps>) => {
	return (
		<Page>
			<Face isSad={exercises === 0} />
			<ExercisesWrapper>
				<Exercises>{exercises}</Exercises>
			</ExercisesWrapper>
		</Page>
	)
}

interface CalendarSymbolProps extends CalendarProps {
	color: string
}

const CalendarSymbol = ({ exercises, color, day }: CalendarSymbolProps) => {
	return (
		<CalendarSymbolWrapper $color={color} tabIndex={1}>
			<CalendarHeader day={day} />
			<CalendarPage exercises={exercises} />
		</CalendarSymbolWrapper>
	)
}

export default CalendarSymbol

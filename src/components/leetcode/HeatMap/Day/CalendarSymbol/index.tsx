import {
	CalendarSymbolWrapper,
	Header,
	Line,
	Page,
	Spiral,
	EyesContainer,
	FaceWrapper,
	Eyes,
	Smile,
	MouthWrapper,
	SadMouth,
	Exercises
} from "./CalendarSymbol.styled"

interface CalendarProps {
	exercises: number
}

const CalendarHeader = () => {
	return (
		<Header>
			<Spiral />
			<Spiral />
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

const CalendarPage = ({ exercises }: CalendarProps) => {
	return (
		<Page>
			<Face isSad={exercises === 0} />
			<Exercises>{exercises}</Exercises>
		</Page>
	)
}

interface CalendarSymbolProps extends CalendarProps {
	color: string
}

const CalendarSymbol = ({ exercises, color }: CalendarSymbolProps) => {
	return (
		<CalendarSymbolWrapper $color={color} tabIndex={1}>
			<CalendarHeader />
			<CalendarPage exercises={exercises} />
		</CalendarSymbolWrapper>
	)
}

export default CalendarSymbol

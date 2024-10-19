import styled from "styled-components"

export const IconWrapper = styled.span``
export const Name = styled.h3`
	text-transform: capitalize;
	margin-bottom: 8px;
	font-size: 1.5rem;
	font-weight: 700;
`

export const Weekday = styled.span`
	text-transform: capitalize;
	display: block;
`

export const DateSpan = styled.span`
	display: block;
`
export const Type = styled.span`
	display: block;
	width: fit-content;
	margin-bottom: 8px;
`
export const Days = styled.span`
	display: block;
`
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`

export const CenterContent = styled(Content)`
	align-items: center;
	text-transform: capitalize;
`

export const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.almostBlack};
	padding: 16px;
	border-radius: 16px;
`

export const HolidayWrapper = styled.li<{
	$isWeekend: boolean
	$isPreweekend: boolean
}>`
	background-color: ${({ theme, $isWeekend, $isPreweekend }) =>
		$isWeekend ? theme.orange : $isPreweekend ? theme.pink : theme.blue};
	color: ${({ theme }) => theme.almostBlack};
	width: 100%;
	max-width: 512px;
	margin: 16px auto;
	padding: 16px;
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	& ${ContentWrapper} {
		color: ${({ theme, $isWeekend, $isPreweekend }) =>
			$isWeekend ? theme.orange : $isPreweekend ? theme.pink : theme.blue};
	}
`
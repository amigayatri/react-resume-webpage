import styled from "styled-components"

export const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	max-height: 16px;
`

export const Line = styled.div`
	width: 50px;
	height: 20px;
	position: absolute;
	top: 0;
	left: -1px;
	border-bottom-style: solid;
	border-bottom-width: 8px;
	z-index: 1;
`
export const Page = styled.div`
	height: 44px;
	width: 100%;
`
export const Spiral = styled.div`
	width: 8px;
	height: 24px;
	transform: translateY(-12px);
	border-radius: 8px;
`
export const EyesContainer = styled.div`
	display: inline-flex;
	justify-content: space-between;
	width: 20px;
	align-items: center;
	max-height: 16px;
	margin-top: 8px;
`
export const Eyes = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 8px;
`
export const FaceWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	flex-direction: column;
	height: 32px;
	overflow: hidden;
`

export const MouthWrapper = styled.div`
	position: relative;
	margin-top: 4px;
`
export const Smile = styled.div`
	width: 16px;
	height: 8px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	box-sizing: border-box;
	background: ${({ theme }) => theme.primary};
	transition: ${({ theme }) => theme.transition};
	position: relative;

	&::after {
		content: " ";
		width: 12px;
		height: 4px;
		border-radius: 4px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		display: block;
		background-color: ${({ theme }) => theme.background};
		position: absolute;
		left: 2px;
		top: 0;
	}
`
export const SadMouth = styled(Smile)`
	transform: rotate(180deg);
`

export const ExercisesWrapper = styled.span`
	margin-top: 1px;
	margin-left: -1px;
	color: ${({ theme }) => theme.background};
	width: 50px;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
	height: 0;
	text-align: center;
	display: block;
	overflow: hidden;
`

export const Day = styled.span`
	overflow: hidden;
	display: block;
	transition: ${({ theme }) => theme.transition};
	color: ${({ theme }) => theme.background};
	background-color: ${({ theme }) => theme.colors.base.blue};
	font-size: 0.75rem;
	text-align: center;
	height: 0;
	width: 0;
	position: absolute;
	left: -2px;
	top: -2px;
	border-radius: 4px;
	z-index: 2;
`

export const Exercises = styled.span`
	width: 0px;
	overflow: hidden;
	display: block;
	color: ${({ theme }) => theme.background};
	transition: ${({ theme }) => theme.transition};
	font-size: 1.5rem;
	text-align: center;
`

export const CalendarSymbolWrapper = styled.div<{ $color: string }>`
	width: 64px;
	height: 64px;
	border-radius: 16px;
	border: ${({ $color, theme }) => $color || theme.primary};
	border-width: 8px;
	border-style: solid;

	& ${Header} {
		& ${Line} {
			border-bottom-color: ${({ $color, theme }) => $color || theme.primary};
		}

		& ${Spiral} {
			background-color: ${({ $color, theme }) => $color || theme.primary};
		}
	}
	& ${FaceWrapper} {
		${Eyes} {
			background-color: ${({ $color, theme }) => $color || theme.primary};
		}
		${Smile}, ${SadMouth} {
			background-color: ${({ $color, theme }) => $color || theme.primary};
		}
		border-bottom-color: ${({ $color, theme }) => $color || theme.primary};
	}
	& ${Exercises} {
		background-color: ${({ $color, theme }) => $color || theme.primary};
	}
`

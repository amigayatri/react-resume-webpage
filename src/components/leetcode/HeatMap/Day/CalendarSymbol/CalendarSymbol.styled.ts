import styled from "styled-components"

export const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	max-height: 8px;
`

export const Line = styled.div`
	width: 100%;
	height: 10px;
	position: absolute;
	top: 0;
	left: 0;
	border-bottom-style: solid;
	border-bottom-width: 4px;
`
export const Page = styled.div`
	height: 24px;
	width: 100%;
`
export const Spiral = styled.div`
	width: 4px;
	height: 12px;
	transform: translateY(-8px);
	border-radius: 4px;
`
export const EyesContainer = styled.div`
	display: inline-flex;
	justify-content: space-between;
	width: 10px;
	align-items: center;
	max-height: 8px;
	margin-top: 4px;
`
export const Eyes = styled.div`
	width: 4px;
	height: 4px;
	border-radius: 4px;
`
export const FaceWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	flex-direction: column;
`

export const MouthWrapper = styled.div`
	position: relative;
	margin-top: 2px;
`
export const Smile = styled.div`
	width: 8px;
	height: 4px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	box-sizing: border-box;
	background: ${({ theme }) => theme.primary};
	transition: ${({ theme }) => theme.transition};
	position: relative;

	&::after {
		content: " ";
		width: 4px;
		height: 2px;
		border-radius: 2px;
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

export const Exercises = styled.span`
	display: none;
	color: ${({ theme }) => theme.background};
	font-size: 0.9rem;
	text-align: center;
`

export const CalendarSymbolWrapper = styled.div<{ $color: string }>`
	width: 32px;
	height: 32px;
	border-radius: 8px;
	border: ${({ $color, theme }) => $color || theme.primary};
	border-width: 4px;
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
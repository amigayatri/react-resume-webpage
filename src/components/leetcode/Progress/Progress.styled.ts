import styled from "styled-components"

export const ProgressWrapper = styled.div`
	position: relative;
`

export const CircleInfo = styled.span`
	color: ${({ theme }) => theme.primary};
	opacity: 0.2;
	transition: ${({ theme }) => theme.transition};
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Circle = styled.div<{
	$percentage: number
	$color: string
	$size?: number
}>`
	width: ${({ $size }) => $size || 128}px;
	height: ${({ $size }) => $size || 128}px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: radial-gradient(
			closest-side,
			${({ theme }) => theme.background} 74%,
			transparent 75% 100%,
			${({ theme }) => theme.background} 0
		),
		conic-gradient(
			${({ $color, $percentage, theme }) =>
					$color + " " + $percentage + "%, " + theme.primary}
				0
		);

	&:hover {
		& ${CircleInfo} {
			opacity: 1;
		}
	}
`

const Label = styled.span<{ $color?: string }>`
	color: ${({ $color, theme }) => $color || theme.primary};
	display: inline-block;
	transition: ${({ theme }) => theme.transition};
	font-size: 1.25rem;
`

export const CircleDoneLabel = styled(Label)`
	color: ${({ $color, theme }) => $color || theme.accent};
	font-size: 1.5rem;
`

export const CircleTotalLabel = styled(Label)`
	border-top: 2px solid ${({ $color, theme }) => $color || theme.primary};
`

export const BarLabel = styled(Label)`
	opacity: 0.2;
`

export const BarDoneLabel = styled(BarLabel)`
	color: ${({ $color, theme }) => $color || theme.accent};
	font-size: 1.5rem;
`
export const BarWrapper = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 32px;
`
export const Bar = styled.div<{
	$percentage: number
	$color?: string
	$done?: boolean
}>`
	background-color: ${({ $color, theme }) => $color || theme.primary};
	width: ${({ $percentage }) => $percentage}%;
	height: 16px;
	position: absolute;
	bottom: 8px;
	left: 0;
	opacity: ${({ $done }) => ($done ? "1" : "0.2")};

	&:hover + ${BarLabel} {
		opacity: 1;
	}
`

export const ProgressDefault = styled.progress`
	visibility: hidden;
	position: absolute;
`

export const ProgressTitle = styled.h2<{ $hide?: boolean }>`
	margin: 8px 0;
	font-size: 1.5rem;
	display: ${({ $hide }) => ($hide ? "none" : "inline-block")};

	&:hover + ${BarWrapper} > ${BarLabel} {
		opacity: 1;
	}
`

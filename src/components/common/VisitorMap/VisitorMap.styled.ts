import styled from "styled-components"

export const VisitorMapWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const MapContainer = styled.div<{
	$isFullpage?: boolean
	$bgColor: string
}>`
	margin: 0 auto;
	width: 100%;
	max-width: ${({ $isFullpage }) =>
		$isFullpage === true ? "100%" : "var(--max-leetcode)"};
	background-color: ${({ $bgColor }) => $bgColor};
	border-radius: 16px;
	&#mapContainer-invisible {
		max-width: 0;
		max-height: 0;
		overflow: hidden;
	}
	&#mapContainer-chart {
		width: fit-content;
	}
	&#mapContainer-chart *,
	&#mapContainer-map * {
		pointer-events: none !important;
	}
	& div {
		max-width: 100% !important;
	}
`

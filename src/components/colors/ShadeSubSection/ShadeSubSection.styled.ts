import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    margin: 16px 0 0;
`
export const ShadesWrapper = styled.div`
	display: flex;
	overflow-x: auto;
	padding: 0 8px 16px;
`
export const TargetWrapper = styled.div``

export const ShadeTitle = styled.h3``

export const PairWrapper = styled.span`
	display: flex;
	justify-content: space-between;
`
export const ShadeSubtitle = styled.h4``

export const Code = styled.span<{ $color: string; $inverse: string }>`
	background-color: ${({ $color }) => $color};
	color: ${({ $inverse }) => $inverse};
	padding: 2px 4px;
`
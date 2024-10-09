import styled from "styled-components"

export const IconWrapper = styled.span<{ $size: number }>`
	font-size: ${({ $size }) => $size}px;
	display: inline-block;
`

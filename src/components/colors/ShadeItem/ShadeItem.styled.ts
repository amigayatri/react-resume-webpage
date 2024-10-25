import styled from "styled-components"

export const Wrapper = styled.div`
	position: relative;
	min-width: 64px;
	height: 64px;
	overflow: visible;
	margin-top: 8px;
`

export const HexaCode = styled.code``

export const Square = styled.div<{
	$base: boolean
}>`
	border-width: 2px;
	border-style: ${({ $base }) => ($base ? "solid" : "none")};
	height: 64px;
	width: 64px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: copy;
	& > code {
		width: 0px;
		display: block;
		overflow: hidden;
		cursor: copy;
	}
	&:hover,
	&:focus {
		height: 80px;
		width: 80px;
		position: absolute;
		top: -8px;
		left: -8px;
		z-index: 5;
		& > code {
			width: fit-content;
		}
	}
`
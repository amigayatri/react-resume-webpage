import styled from "styled-components"

export const HeaderWrapper = styled.header`
	padding: 32px var(--color-container);
	position: relative;
	text-align: center;
	background-color: #111111;
	font-family: "Fira Code", monospace;
`

export const HeaderDegrade = styled.div`
    background-color: #000000;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0) 90%
	);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 120px;
`

export const Title = styled.h1`
	margin: 0;
	line-height: 1;
	color: #ffb2b2;
	font-family: "Press Start 2P", "Fira Code", monospace;
    z-index: 5;
    position: relative;
`

export const SubHeading = styled.summary`
	font-family: "Fira Code", monospace;
	color: #ffb2b2;
	margin: 8px 0 0;
	line-height: 1;
    z-index: 5;
    position: relative;
`

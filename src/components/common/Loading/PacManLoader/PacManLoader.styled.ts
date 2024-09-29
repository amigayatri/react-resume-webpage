import styled from "styled-components"

import {
	BallAnimation,
	PacManAnimation
} from "../../../../themes/animations/pacman"

const value = 32
const unit = "px"
const colors = {
	pacman: "#f92472",
	balls: ["#f83535", "#fd9621", "#f4cd04", "#a6e22c", "#67d8ef", "#ac80ff"]
}

export const PacManLoaderWrapper = styled.span`
	height: ${value * 2 + unit};
	width: ${value * 3 + unit};
	position: relative;
`

export const PacMan = styled.span<{ $i: number }>`
	width: 0;
	height: 0;
	border-width: ${value + unit};
	border-style: solid;
	border-right-color: transparent;
	border-top-color: ${({ $i }) => ($i === 0 ? "transparent" : colors.pacman)};
	border-left-color: ${colors.pacman};
	border-bottom-color: ${({ $i }) =>
		$i === 0 ? colors.pacman : "transparent"};
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 0;
	animation-fill-mode: both;
	animation: ${({ $i }) => PacManAnimation[$i]} 0.5s infinite ease-in-out;
`

export const Ball = styled.span<{ $i: number }>`
	width: ${value / 4 + unit};
	height: ${value / 4 + unit};
	background-color: ${({ $i }) => colors.balls[$i]};
	border-radius: 50%;
	position: absolute;
	top: ${value - value / 6 + unit};
	left: ${value * 6 + unit};
	transform: translate(0);
	animation: ${BallAnimation} 0.6s ${({ $i }) => $i * 0.1}s infinite linear;
	animation-fill-mode: both;
`

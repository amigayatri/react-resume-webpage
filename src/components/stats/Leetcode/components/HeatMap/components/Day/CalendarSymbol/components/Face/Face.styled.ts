"use client"
import styled from "styled-components"

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

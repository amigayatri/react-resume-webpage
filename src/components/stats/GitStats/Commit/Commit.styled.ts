import styled from "styled-components"

export const CommitWrapper = styled.div`
	display: flex;
	padding: 0 16px;
	padding-right: 0;
	width: 100%;
`
export const CommitItem = styled.li`
	display: flex;
	position: relative;
	border: 2px solid transparent;
	padding-left: 16px;
	width: 100%;
	border-radius: 0 16px 16px 0;
	z-index: 1;
	color: ${({ theme }) => theme.colors.neutral.white};
	&::before {
		z-index: 2;
		margin: 0;
		content: " ";
		width: 2px;
		min-width: 2px;
		height: calc(100% + 4px);
		display: block;
		list-style: none;
		background-color: ${({ theme }) => theme.colors.neutral.white};
		position: absolute;
		top: 0;
		left: 0;
	}
	&::after {
		position: absolute;
		content: " ";
		width: 8px;
		height: 8px;
		left: -4px;
		top: 50%;
		border-radius: 4px;
		transform: translateY(-4px);
		background-color: ${({ theme }) => theme.colors.neutral.white};
	}
	&:hover,
	&:focus {
		border-color: ${({ theme }) => theme.accent};
		border-left-color: transparent;
	}
`

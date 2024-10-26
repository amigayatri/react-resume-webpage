import styled from "styled-components"

export const CommitWrapper = styled.li`
	display: flex;
	padding: 0 16px;
	padding-right: 0;
	width: 100%;
`
export const CommitItem = styled.div`
	display: flex;
	position: relative;
	border: 2px solid transparent;
	padding: 16px;
	padding-right: 8px;
	width: 100%;
	border-radius: 0;
	z-index: 1;
	color: ${({ theme }) => theme.white};
	&::before {
		z-index: 2;
		margin: 0;
		content: " ";
		width: 2px;
		min-width: 2px;
		height: calc(100% + 4px);
		display: block;
		list-style: none;
		background-color: ${({ theme }) => theme.purple};
		position: absolute;
		top: -2px;
		left: -1px;
	}
	&::after {
		z-index: 5;
		position: absolute;
		content: " ";
		width: 8px;
		height: 8px;
		left: -4px;
		top: 50%;
		border-radius: 4px;
		transform: translateY(-4px);
		background-color: ${({ theme }) => theme.purple};
	}
	&:hover,
	&:focus {
		border-color: ${({ theme }) => theme.accent};
		border-left-color: transparent;
		border-right-color: transparent;
		&:hover::after {
			background-color: ${({ theme }) => theme.accent};
		}
	}
`

import styled from "styled-components"

export const Button = styled.button`
	cursor: pointer;
	background-color: ${({ theme }) => theme.accent};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px;
	border-radius: 16px;
	border: none;
	color: ${({ theme }) => theme.secondAccent};
	border: 2px solid ${({ theme }) => theme.secondAccent};
`
export const Text = styled.span`
	font-size: 1.75rem;
	margin: 0 8px;
	text-transform: capitalize;
`
export const List = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	overflow-x: auto;
	margin: 16px 0;
	min-height: 360px;
	padding: 16px;
	border: 2px solid ${({ theme }) => theme.secondAccent};
	background-color: ${({ theme }) => theme.accent};
	border-radius: 16px;
`
export const Item = styled.li`
	margin-left: 16px;
	&:first-of-type {
		margin-left: 0;
	}
`
export const Img = styled.img`
	height: 320px;
	border-radius: 16px;
`

import styled from "styled-components"
import { LinkWrapper } from "../NavigationItem/NavigationItem.styled"

export const ContentWrapper = styled.ul`
	list-style: none;
	overflow: hidden;
	position: absolute;
	background-color: ${({ theme }) => theme.black};
	z-index: 100;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border-radius: 0 0 16px 16px;
	transition: ${({ theme }) => theme.transition};

	& ${LinkWrapper} {
		margin-left: 0;
	}
`

export const SubNavWrapper = styled.li<{ $isOpen: boolean }>`
	height: 24px;
	margin-left: 16px;
	cursor: pointer;
	position: relative;

	& ${ContentWrapper} {
		height: fit-content;
		width: fit-content;
		max-height: ${({ $isOpen }) => ($isOpen ? "360px" : "0px")};
		max-width: ${({ $isOpen }) => ($isOpen ? "360px" : "0px")};
		padding: ${({ $isOpen }) => ($isOpen ? "12px" : "0px")};
	}

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.accent};
	}
`

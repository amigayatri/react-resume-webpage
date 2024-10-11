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

export const SubNavWrapper = styled.div<{ $isOpen: boolean }>`
	margin-left: 32px;
	cursor: pointer;
	position: relative;

	& ${ContentWrapper} {
		height: ${({ $isOpen }) => ($isOpen ? "144px" : "0px")};
		width: ${({ $isOpen }) => ($isOpen ? "240px" : "0px")};
		padding: ${({ $isOpen }) => ($isOpen ? "12px" : "0px")};
	}

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.accent};
	}
`

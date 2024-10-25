import styled from "styled-components"
import media from "../../../../constants/medias"

export const MenuButtonWrapper = styled.span`
	display: none;
	width: 32px;
	height: 24px;
	margin-top: 8px;
	position: relative;
	cursor: pointer;
	${media.max.md} {
		display: block;
	}
`

export const Icon = styled.span<{ $isOpen: boolean }>`
	background-color: ${({ $isOpen, theme }) =>
		$isOpen ? theme.black : theme.white};
	width: ${({ $isOpen }) => ($isOpen ? "0px" : "32px")};
	height: 2px;
	display: inline-block;
	position: absolute;
	top: 50%;
	transform: translateY(-1px);
	left: 0;
	transition: ${({ theme }) => theme.transition};

	&::after,
	&::before {
		content: " ";
		display: inline-block;
		width: 32px;
		height: 2px;
		background-color: ${({ $isOpen, theme }) =>
			$isOpen ? theme.accent : theme.white};
		position: absolute;
		top: ${({ $isOpen }) => ($isOpen ? "50%" : "-10px")};
		left: 0;
		transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
		transition: ${({ theme }) => theme.transition};
	}

	&::after {
		top: ${({ $isOpen }) => ($isOpen ? "50%" : "auto")};
		bottom: ${({ $isOpen }) => ($isOpen ? "auto" : "-10px")};
		transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
	}
`

import styled from "styled-components"
import media from "../../../constants/medias"
import { LinkWrapper } from "./NavigationItem/NavigationItem.styled"

export const NavigationWrapper = styled.div`
	position: absolute;
	left: var(--color-container);
`

export const DesktopWrapper = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: space-between;
	padding-left: 0;
	margin: 0;

	${media.max.md} {
		display: none;
	}
`

export const MobileWrapper = styled.ul<{ $isOpen: boolean; $isRTL: boolean }>`
	${media.max.md} {
		display: block;
		position: fixed;
		list-style: none;
		padding: ${({ $isOpen }) => ($isOpen ? "32px" : "0")};
		top: 40px;
		left: 0;
		background-color: ${({ theme }) => theme.black};
		z-index: 100;
		overflow: hidden;
		height: ${({ $isOpen }) => ($isOpen ? "100vh" : "0")};
		width: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
		transition: ${({ theme }) => theme.transition};
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: ${({ $isRTL }) => ($isRTL ? "flex-end" : "flex-start")};
		& ${LinkWrapper} {
			margin-bottom: 24px;
		}
	}
	display: none;
`
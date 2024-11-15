"use client"

import styled from "styled-components"
import { media } from "../../../constants/medias"

export const Label = styled.span`
	padding-left: 4px;
	text-wrap: nowrap;
`

export const UnderLine = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 0;
	background-color: currentColor;
	transition: ${({ theme }) => theme.transition};
`

export const ContentWrapper = styled.a`
	text-decoration: none;
	color: currentColor;
	line-height: 1;
	font-size: 1.125rem;
	text-wrap: nowrap;
	display: block;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: center;
	padding: 2px;
	transition: ${({ theme }) => theme.transition};

	& ${Label} {
		margin-left: 8px;
	}
`

export const LinkWrapper = styled.li<{
	$isActive: boolean
	$isSubLink?: boolean
}>`
	display: inline-block;
	margin: 0;
	margin-left: ${({ $isSubLink }) => ($isSubLink === true ? "32px" : "16px")};
	position: relative;
	color: ${({ theme, $isActive }) =>
		$isActive ? theme.secondAccent : theme.white};
	padding-bottom: 2px;
	& ${ContentWrapper} {
		font-weight: ${({ $isActive }) => ($isActive ? "700" : "400")};
	}
	&:hover,
	&:focus {
		color: ${({ theme }) => theme.accent};
		& ${UnderLine} {
			height: 2px;
			width: 100%;
		}
	}
`

export const NavigationWrapper = styled.nav`
	position: relative;
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

export const MobileWrapper = styled.ul<{ $isOpen: boolean }>`
	${media.max.md} {
		display: block;
		position: fixed;
		list-style: none;
		padding: ${({ $isOpen }) => ($isOpen ? "32px" : "0")};
		top: var(--header-size);
		left: 0;
		background-color: ${({ theme }) => theme.almostBlack};
		z-index: 100;
		overflow: hidden;
		height: ${({ $isOpen }) => ($isOpen ? "100vh" : "0")};
		width: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
		transition: ${({ theme }) => theme.transition};
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		& ${LinkWrapper} {
			margin-bottom: 24px;
		}
	}
	display: none;
`
export const SubNavContentWrapper = styled.ul`
	list-style: none;
	overflow: hidden;
	position: absolute;
	background-color: ${({ theme }) => theme.almostBlack};
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

export const OpenSubNav = styled.div`
	height: 24px;
	margin-left: 16px;
	cursor: pointer;
	&:hover,
	&:focus {
		color: ${({ theme }) => theme.accent};
	}
`

export const SubNavWrapper = styled.li<{ $isOpen: boolean }>`
	position: relative;

	& ${SubNavContentWrapper} {
		height: fit-content;
		width: fit-content;
		max-height: ${({ $isOpen }) => ($isOpen ? "360px" : "0px")};
		max-width: ${({ $isOpen }) => ($isOpen ? "360px" : "0px")};
		padding: ${({ $isOpen }) => ($isOpen ? "12px" : "0px")};
	}
`
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

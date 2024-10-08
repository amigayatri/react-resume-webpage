import styled from "styled-components"
import { Link } from "react-router-dom"
import media from "../../../../constants/medias"

export const Label = styled.span`
	margin-left: 4px;
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

export const ContentWrapper = styled(Link)<{ $isRTL: boolean }>`
	text-decoration: none;
	color: currentColor;
	line-height: 1;
	font-size: 1.25rem;
	margin-left: 4px;
	text-wrap: nowrap;
	display: block;
	display: flex;
	flex-direction: ${({ $isRTL }) => ($isRTL ? "row-reverse" : "row")};
	align-items: flex-end;
	justify-content: center;
	padding: 2px;
	& ${Label} {
		margin-left: ${({ $isRTL }) => ($isRTL ? "0" : "8px")};
		margin-right: ${({ $isRTL }) => ($isRTL ? "8px" : "0")};
	}
`

export const LinkWrapper = styled.li<{ $isActive: boolean }>`
	margin: 0;
	margin-left: 32px;
	position: relative;
	color: ${({ theme, $isActive }) =>
		$isActive ? theme.secondAccent : theme.white};
	transition: ${({ theme }) => theme.transition};
	padding-bottom: 2px;
	& ${ContentWrapper} {
		font-weight: ${({ $isActive }) => ($isActive ? "700" : "400")};
	}
	&:first-of-type {
		margin-left: 0;
	}
	${media.max.md} {
		margin-left: 0;
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

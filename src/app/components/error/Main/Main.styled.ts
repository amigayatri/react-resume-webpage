"use client"

import styled from "styled-components"
import { Icon } from "../../common/SVGIcon/SVGIcon.styled"
import { media } from "../../../constants/medias"

export const MainWrapper = styled.main<{ $isNotFound: boolean }>`
	position: ${({ $isNotFound }) => ($isNotFound ? "absolute" : "relative")};
	top: ${({ $isNotFound }) => ($isNotFound ? "0" : "auto")};
	color: ${({ theme }) => theme.pink};
	background-color: ${({ theme }) => theme.background};
	width: 100%;
	min-height: ${({ $isNotFound }) =>
		$isNotFound ? "100vh" : "var(--fullpage)"};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 var(--color-container);
`

export const IconWrapper = styled.div`
	color: ${({ theme }) => theme.secondAccent};
	&:nth-of-type(odd) {
		color: ${({ theme }) => theme.accent};
	}
`

export const IconsWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.pink};

	${media.max.md} {
		& ${Icon} {
			width: 80px;
			height: 80px;
		}
	}

	${media.max.xs} {
		flex-direction: column;
	}
`

export const Button = styled.a`
	font-size: 2rem;
`

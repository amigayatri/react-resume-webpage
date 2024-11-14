"use client"

import styled from "styled-components"
import { media } from "../../../../../constants/medias"

export const Wrapper = styled.section`
	padding: 32px 0;
`

export const ListWrapper = styled.ul`
	padding: 0;
	margin: 0;
`

export const SubHeadingWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	${media.max.md} {
		flex-direction: column;
	}
`

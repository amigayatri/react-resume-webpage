"use client"

import styled from "styled-components"
import { SelectWrapper } from "../../../../../../common/Select/Select.styled"

export const Selectors = styled.div`
	margin-top: 8px;
	display: flex;
	padding-right: 32px;
	flex-direction: column;
	flex: 2;
	& ${SelectWrapper} {
		max-width: 320px;
	}
`

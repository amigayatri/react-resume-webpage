"use client"

import { HexColorInput, HexColorPicker } from "react-colorful"
import styled from "styled-components"
import { media } from "../../../../../../../constants/medias"
import { ButtonTag } from "../Button/ColorButton.styled"

export const TargetWrapper = styled.div`
    display: flex;
    align-items: center;
    ${media.max.sm} {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const ColorInputWrapper = styled.div`
    margin-right: 8px;
`

export const SelectedButton = styled(ButtonTag)`
    height: fit-content;
`
export const HexInput = styled(HexColorInput)`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    padding: 2px 4px;
    border-radius: 4px;
    margin-bottom: 8px;
`

export const ColorPicker = styled(HexColorPicker)`
	background-color: ${({ theme }) => theme.primary};
	padding: 4px;
	border-radius: 8px;
`
export const SelectedColor = styled.div<{ $bg: string }>`
	height: 128px;
	width: 128px;
	background-color: ${({ $bg }) => $bg};
	border-radius: 8px;
	border: 2px solid ${({ theme }) => theme.almostBlack};
	margin: 8px 0;
`

export const SelectedText = styled.span``

export const SelectedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px 32px;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.almostBlack};
	border-radius: 8px;
	margin-left: 16px;
	height: 196px;
	${media.max.sm} {
		margin-left: 0;
		margin-top: 16px;
	}
`

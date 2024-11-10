"use client"

import { keyframes } from "styled-components"
import { Named } from "./../Named"

const { white, almostBlack } = Named

export const whiteToBlack = keyframes`
	0% { background-color: ${white};}
	40% { background-color: ${almostBlack};}
	80% { background-color: ${white};}
`

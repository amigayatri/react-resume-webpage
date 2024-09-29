import { keyframes } from "styled-components"
import Named from "./../Named"

const { white, black } = Named

export const whiteToBlack = keyframes`
	0% { background-color: ${white};}
	40% { background-color: ${black};}
	80% { background-color: ${white};}
`

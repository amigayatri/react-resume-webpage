import { keyframes } from "styled-components"

const value = 32
const unit = "px"

export const BallAnimation = keyframes`
    75% {opacity: 0.7}
    100% {transform: translate(${value * -6 + unit})}
`
const PacAnimation = keyframes`
    0% {transform: rotate(0deg)}
    50% {transform: rotate(-44deg)}
`

const ManAnimation = keyframes`
    0% {transform: rotate(0deg)}
    50% {transform: rotate(44deg)}
`

export const PacManAnimation = [PacAnimation, ManAnimation]

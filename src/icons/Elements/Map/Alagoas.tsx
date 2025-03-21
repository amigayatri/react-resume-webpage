import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const AlagoasIcon = (props: SVGProps) => {
    const {
        alt,
        size,
        isTrue,
        hasTransition,
        isToggle,
        color,
        rotationDeg,
        isResponsive,
        customStyle
    } = props
    const safeWrapperStyle =
        customStyle !== undefined && customStyle.wrapper !== undefined ?
            customStyle.wrapper
        :   {}
    const safeIconStyle =
        customStyle !== undefined && customStyle.icon !== undefined ?
            customStyle.icon
        :   {}

    const Wrapper = isToggle === true ? ToggleIconWrapper : IconWrapper
    return (
        <Wrapper
            style={safeWrapperStyle}
            $isResponsive={isResponsive}
            $angle={rotationDeg}
            $isTrue={isTrue}
        >
            <Icon
                style={safeIconStyle}
                $isResponsive={isResponsive}
                $size={size}
                $hasTransition={hasTransition}
                role="img"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
            >
                <title>{alt}</title>
                <path d="M 89.095 37.299 C 81.573 41.87 76.022 52.209 65.952 52.25 C 56.212 52.294 38.611 45.457 26.822 35.126 C 23.269 42.045 17.1 46.032 11.007 51.592 C 10.671 51.897 10.334 52.189 10 52.506 C 13.359 55.204 17.133 57.511 21.074 59.674 C 24.155 61.364 27.332 62.971 30.538 64.569 C 35.429 67.006 40.346 69.457 44.933 72.285 C 45.7 72.297 46.401 72.42 47.075 72.592 C 50.141 73.371 52.343 75.631 54.377 78.116 C 57.465 81.889 60.203 86.112 65.067 86.303 C 65.568 86.323 66.081 86.32 66.63 86.249 C 66.923 86.772 67.209 87.26 67.488 87.718 C 70.217 92.202 72.284 93.645 74.119 93.344 C 77.939 92.716 80.752 84.515 86.447 80.436 C 95.497 67.325 112.073 55.671 117.708 40.552 C 118.211 39.22 118.038 38.165 117.391 37.33 C 113.529 32.346 92.239 35.397 89.095 37.299 Z" />
            </Icon>
        </Wrapper>
    )
}

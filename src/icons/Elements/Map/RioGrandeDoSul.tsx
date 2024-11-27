import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const RioGrandeDoSulIcon = (props: SVGProps) => {
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
                <path d="M 113.175 49.332 C 111.474 48.9 118.121 38.689 117.998 38.369 C 116.879 35.082 105.249 38.102 102.223 31.695 C 99.992 26.899 73.313 16.877 73.049 17.862 C 71.799 18.584 70.456 19.18 69.059 19.637 C 69.265 19.145 65.702 18.702 62.657 19.041 C 60.846 19.242 59.217 19.719 58.679 20.626 C 57.838 20.101 51.499 24.305 49.775 24.534 C 49.692 24.502 41.559 29.661 41.247 30.286 C 39.884 34.161 34.988 31.4 36.548 36.068 C 35.858 33.968 25.986 45.629 25.542 46.06 C 23.026 48.389 14.797 55.258 14.173 58.478 C 13.088 59.859 11.692 60.845 10 61.373 C 14.124 66.561 16.687 58.747 20.86 60.388 C 24.391 61.828 27.383 66.004 30.141 68.401 C 32.146 70.142 31.391 74.973 34.445 73.527 C 36.647 72.476 37.205 69.914 39.507 72.147 C 43.167 75.73 74.758 95.542 70.191 99.418 C 62.898 105.63 65.379 115.846 75.086 106.319 C 82.185 99.418 82.119 90.974 90.99 85.093 C 99.404 79.509 105.614 73.328 110.047 64.194 C 112.035 60.05 113.893 55.819 116.422 51.996 C 116.902 51.271 117.397 50.556 117.93 49.865 C 117.233 46.223 112.9 48.967 113.175 49.332 Z" />
            </Icon>
        </Wrapper>
    )
}

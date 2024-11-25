import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const SergipeIcon = (props: SVGProps) => {
    const {
        alt,
        size,
        hasTransition,
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

    return (
        <IconWrapper
            style={safeWrapperStyle}
            $isResponsive={isResponsive}
            $angle={rotationDeg}
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
                <path d="M 101.014 51.668 C 99.849 50.964 98.661 50.275 97.472 49.596 C 90.35 49.318 86.343 43.136 81.823 37.611 C 78.627 34.59 75.017 31.924 71.132 29.523 C 70.145 29.273 69.117 29.092 67.995 29.075 C 61.279 24.936 54.083 21.349 46.921 17.779 C 42.348 15.878 37.835 14.037 33.555 12.144 C 31.96 11.438 30.388 10.728 28.871 10 C 25.492 30.13 47.244 40.203 37.993 57.52 C 36.719 59.723 37.777 63.432 38.25 66.853 C 38.778 70.689 38.529 74.138 33.424 74.704 C 33.272 74.72 33.154 74.758 32.993 74.769 C 28.673 75.048 21.238 72.32 17.938 76.461 C 17.518 76.988 17.149 77.596 16.879 78.366 C 16.875 78.377 16.867 78.383 16.864 78.394 C 13.222 83.195 19.818 96.318 29.5 106.153 C 38.106 114.895 49.153 121.038 57.627 116.423 C 80.643 103.853 81.004 65.341 112.152 63.588 C 111.955 62.281 111.449 61.06 110.723 59.904 C 108.036 60.346 105.011 58.232 101.014 51.668 Z" />
            </Icon>
        </IconWrapper>
    )
}

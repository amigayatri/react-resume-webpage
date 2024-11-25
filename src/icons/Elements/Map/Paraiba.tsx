import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const ParaibaIcon = (props: SVGProps) => {
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
                <path d="M 83.78 44.917 C 81.705 44.496 80.112 43.884 79.28 43.005 C 78.786 42.482 78.549 41.868 78.668 41.137 C 71.961 38.742 55.021 39.285 55.021 34.808 C 50.904 30.907 30.165 34.987 18.267 40.323 C 18.235 40.337 18.205 40.352 18.173 40.367 C 14.433 42.052 11.572 43.86 10.41 45.58 C 7.664 49.765 19.741 68.169 16.165 73.503 C 15.279 74.822 14.759 75.824 14.481 76.619 C 13.237 80.185 17.405 79.127 20.896 78.977 C 21.237 78.963 21.572 78.958 21.895 78.967 C 22.239 78.976 22.566 79.005 22.876 79.054 C 23.418 79.139 23.905 79.284 24.278 79.544 C 29.938 83.435 47.892 69.146 55.799 69.191 C 57.387 69.199 58.569 69.785 59.163 71.215 C 59.185 71.267 59.216 71.308 59.236 71.361 C 59.392 71.796 59.243 72.48 58.893 73.32 C 58.832 73.468 58.749 73.631 58.675 73.79 C 56.911 77.544 51.843 83.793 50.543 85.843 C 56.232 87.884 55.148 96.929 62.432 94.248 C 65.502 93.133 74.326 85.651 74.704 82.776 C 81.675 82.328 90.881 81.978 97.009 77.855 C 99.868 75.918 100.403 73.318 102.48 71.815 C 103.52 71.063 104.937 70.581 107.238 70.601 C 107.309 70.605 107.37 70.627 107.441 70.633 C 110.06 70.838 112.286 71.732 114.084 73.298 C 114.627 73.771 115.143 74.287 115.606 74.883 C 121.235 74.373 115.606 47.783 112.29 46.409 C 112.21 46.376 112.102 46.348 112.004 46.319 C 108.407 45.265 92.216 46.634 83.78 44.917 Z" />
            </Icon>
        </IconWrapper>
    )
}

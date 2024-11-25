import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const RoraimaIcon = (props: SVGProps) => {
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
                <path d="M 50.129 63.261 C 50.923 65.235 50.555 67.027 49.06 68.632 C 51.183 70.553 52.696 72.876 53.582 75.589 C 54.8 79.446 51.849 84.763 54.374 88.121 C 54.078 97.09 60.854 98.75 53.84 105.097 C 54.099 104.857 62.885 114.621 63.437 115.931 C 64.746 114.973 68.917 117.075 69.341 118 C 67.107 113.109 70.078 94.968 78.273 103.29 C 87.981 113.164 85.673 98.418 90.602 91.664 C 93.337 87.923 102.247 87.374 106.825 90.525 C 108.082 89.109 108.92 87.93 109.156 87.103 C 110.147 83.651 109.225 79.868 108.837 76.309 C 108.783 75.818 108.738 75.332 108.712 74.851 C 108.563 72.01 103.305 71.694 100.998 68.963 C 97.085 64.293 94.134 59.164 92.731 52.575 C 92.084 49.493 92.97 39.12 94.558 37.037 C 95.831 35.356 98.562 33.957 99.171 31.685 C 101.054 24.49 88.8 24.359 91.457 19.063 C 94.778 12.42 84.517 7.53 81.583 11.33 C 79.57 13.951 84.146 17.125 78.02 19.893 C 77.945 23.067 73.627 22.568 71.78 21.978 C 73.92 24.765 60.635 27.42 59.602 28.843 C 57.96 29.026 54.268 26.37 53.142 28.731 C 53.161 30.06 52.477 30.429 51.094 29.839 C 47.864 29.967 50.687 33.732 50.097 35.025 C 48.657 38.144 41.57 30.726 39.024 32.479 C 37.38 32.754 36.274 31.999 35.737 30.208 C 36.329 34.581 18.593 26.111 18.501 26.424 C 17.339 30.595 26.623 34.821 27.933 38.531 C 25.7 40.654 30.738 55.121 32.402 55.31 C 34.004 55.582 35.754 57.463 37.567 60.447 C 38.799 59.729 40.042 59.075 41.309 59.02 C 42.713 58.962 49.485 62.102 50.129 63.261 Z" />
            </Icon>
        </IconWrapper>
    )
}

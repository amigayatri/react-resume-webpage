import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const SantaCatarinaIcon = (props: SVGProps) => {
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
                <path d="M 91.901 29.823 C 86.376 24.98 75.919 29.192 71.898 32.241 C 68.848 34.568 59.935 30.499 61.871 37.863 C 63.418 43.721 56.495 39.994 54.167 39.897 C 42.207 39.315 29.813 32.828 18.087 33.021 C 17.332 33.029 16.7 33.166 16.119 33.355 C 10.085 35.324 12.692 46.327 10 51.711 C 10.21 51.624 10.583 51.658 11.1 51.799 C 15.586 51.302 20.841 51.953 20.536 52.678 C 22.596 52.006 24.575 51.128 26.418 50.063 C 26.808 48.611 66.136 63.384 69.425 70.455 C 73.887 79.899 91.03 75.446 92.68 80.293 C 92.861 80.765 83.063 95.818 85.571 96.454 C 85.165 95.917 91.552 91.873 92.58 97.24 C 91.793 98.259 91.064 99.313 90.358 100.38 C 94.567 96.311 102.153 85.578 107.204 82.903 C 119.269 76.417 110.116 63.634 116.216 55.786 C 116.653 55.883 112.972 39.27 115.393 36.803 C 121.31 28.634 116.241 27.623 109.304 28.299 C 102.215 28.989 93.173 31.44 91.901 29.823 Z" />
            </Icon>
        </IconWrapper>
    )
}

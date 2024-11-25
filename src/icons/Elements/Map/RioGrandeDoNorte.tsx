import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const RioGrandeDoNorteIcon = (props: SVGProps) => {
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
                <path d="M 33.639 48.97 C 33.123 50.081 32.61 51.267 32.096 52.598 C 31.545 54.043 30.911 55.384 30.231 56.664 C 27.754 62.115 24.79 67.754 21.754 71.835 C 21.794 71.749 15.355 75.452 11.987 78.616 C 11.287 79.549 10.624 80.519 10 81.532 C 9.993 81.75 10.045 81.947 10.163 82.123 C 10.218 82.135 10.273 82.143 10.328 82.157 C 23.786 76.121 47.248 71.506 51.906 75.918 C 51.906 80.981 71.069 80.369 78.656 83.077 C 78.523 83.905 78.789 84.598 79.349 85.189 C 80.471 86.023 82.244 86.745 84.439 87.352 C 93.983 89.294 112.298 87.745 116.369 88.938 C 117.047 88.768 117.61 88.576 118 88.353 C 111.775 73.707 113.585 47.902 93.697 44.753 C 79.887 42.552 68.541 43.528 55.233 40.342 C 50.625 39.243 47.046 38.786 44.097 39.231 C 40.305 42.112 35.404 46.32 33.639 48.97 Z" />
            </Icon>
        </IconWrapper>
    )
}

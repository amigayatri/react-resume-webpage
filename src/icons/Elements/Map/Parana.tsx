import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const ParanaIcon = (props: SVGProps) => {
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
                <path d="M 115.582 71.796 C 114.906 69.81 111.726 72.354 109.743 71.915 C 108.313 71.636 112.283 65.998 106.402 65.358 C 104.417 65.12 100.958 65.798 99.252 65.48 C 95.041 64.686 99.409 61.984 98.616 59.878 C 97.068 55.546 94.245 52.725 93.174 48.593 C 92.42 45.772 93.414 37.669 87.931 37.866 C 86.7 33.578 78.316 35.761 74.779 35.165 C 74.544 35.402 61.947 31.272 60.159 31.272 C 57.815 31.23 50.308 26.346 49.829 30.874 C 48.068 30.246 41.584 30.674 37.706 30.625 C 31.552 32.611 26.891 35.339 25.236 39.095 C 23.549 42.951 20.35 43.27 19.456 47.242 C 18.889 49.758 18.809 53.157 16.22 54.467 C 15.991 54.583 15.773 54.711 15.502 54.79 C 14.191 56.061 13.953 65.355 13.516 67.463 C 12.74 71.232 12.621 75.211 10 78.312 C 10.396 84.268 16.438 79.66 18.601 80.771 C 23.469 83.273 21.761 90.587 27.383 92.689 C 27.483 92.663 27.636 92.657 27.79 92.651 C 28.267 92.496 28.785 92.384 29.405 92.377 C 39.024 92.219 49.189 97.54 59 98.017 C 60.91 98.097 66.588 101.154 65.32 96.349 C 63.732 90.308 71.043 93.646 73.545 91.737 C 76.844 89.236 85.421 85.781 89.953 89.754 C 90.996 91.08 98.413 89.07 104.228 88.502 C 105.05 88.045 105.802 87.773 106.443 87.764 C 109.998 87.69 115.241 79.369 118 75.588 C 117.964 75.62 117.919 75.662 117.884 75.691 C 118.239 75.374 116.219 73.545 115.582 71.796 Z" />
            </Icon>
        </Wrapper>
    )
}

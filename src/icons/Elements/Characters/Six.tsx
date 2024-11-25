import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const SixIcon = (props: SVGProps) => {
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
                viewBox="-10 0 48 48"
            >
                <title>{alt}</title>
                <path
                    fill={color}
                    d="M 15.642 4 C 17.076 4 18.407 4.189 19.633 4.566 C 20.86 4.944 22.021 5.491 23.115 6.208 L 21.7 8.784 C 20.775 8.237 19.794 7.822 18.756 7.539 C 17.718 7.255 16.623 7.114 15.472 7.114 C 13.226 7.114 11.339 7.869 9.81 9.379 C 8.282 10.888 7.14 13.002 6.385 15.72 C 5.63 18.437 5.272 21.608 5.309 25.231 L 5.366 26.788 C 5.385 31.695 6.097 35.272 7.503 37.517 C 8.909 39.763 11.169 40.886 14.283 40.886 C 16.982 40.886 19.015 39.966 20.384 38.126 C 21.752 36.286 22.436 33.705 22.436 30.384 C 22.436 28.138 22.115 26.373 21.474 25.09 C 20.832 23.807 19.935 22.896 18.784 22.358 C 17.633 21.82 16.303 21.551 14.793 21.551 C 12.509 21.551 10.537 22.235 8.876 23.604 C 7.215 24.972 5.894 26.703 4.913 28.798 L 4.771 25.033 C 6.074 22.636 7.555 20.919 9.216 19.881 C 10.877 18.843 12.821 18.324 15.047 18.324 C 17.048 18.324 18.883 18.749 20.554 19.598 C 22.224 20.447 23.568 21.764 24.587 23.547 C 25.607 25.331 26.116 27.609 26.116 30.384 C 26.116 33.328 25.569 35.809 24.474 37.829 C 23.38 39.848 21.936 41.381 20.143 42.429 C 18.35 43.476 16.416 44 14.34 44 C 12.037 44 10.093 43.566 8.508 42.698 C 6.923 41.83 5.644 40.57 4.672 38.919 C 3.7 37.267 2.993 35.253 2.549 32.875 C 2.106 30.497 1.884 27.808 1.884 24.807 C 1.884 20.523 2.427 16.829 3.512 13.724 C 4.597 10.619 6.163 8.223 8.211 6.534 C 10.259 4.845 12.736 4 15.642 4 Z"
                />
            </Icon>
        </IconWrapper>
    )
}

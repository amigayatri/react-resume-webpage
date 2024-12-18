import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const MaranhaoIcon = (props: SVGProps) => {
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
                <path d="M 48.078 31.56 C 46.95 33.283 45.129 36.575 44.328 38.436 C 43.42 40.474 39.534 45.795 39.643 47.723 C 37.743 48.701 37.381 52.588 34.601 52.078 C 31.594 55.018 26.723 56.975 24.503 60.688 C 26.059 60.437 26.281 58.547 28.321 58.607 C 29.311 59.491 30.472 59.78 31.77 59.491 C 33.643 59.406 37.694 61.875 38.328 63.956 C 39.375 67.318 39.431 70.845 38.852 74.124 C 38.383 76.755 35.681 80.722 35.49 82.625 C 35.572 81.62 39.207 86.939 38.655 86.345 C 40.918 88.853 42.129 93.402 45.656 91.664 C 50.068 89.486 51.499 94.517 48.137 96.157 C 45.823 97.287 43.7 101.215 43.342 104.26 C 45.438 107.581 48.112 108.022 48.193 111.784 C 48.193 112.803 50.672 117.283 51.61 117.557 C 54.081 118.284 55.551 118.067 56.38 117.261 C 59.167 114.55 54.647 105.11 55.964 101.85 C 57.617 97.798 59.409 92.933 61.338 88.98 C 62.882 85.811 68.972 85.356 71.729 83.303 C 75.286 80.658 77.323 76.701 82.2 76.812 C 85.12 79.776 90.498 77.764 91.404 74.015 C 92.398 69.912 85.45 66.755 90.08 62.344 C 93.553 60.321 91.074 55.978 90.468 53.168 C 92.286 51.391 90.689 50.302 90.192 48.51 C 89.725 46.677 92.565 43.883 93.254 42.324 C 95.042 38.33 98.737 39.61 100.114 36.606 C 100.114 36.577 103.22 32.524 103.479 30.603 C 103.578 29.872 103.265 29.449 102.208 29.676 C 100.277 30.047 96.033 29.936 93.995 29.468 C 87.103 27.94 83.689 21.34 78.563 27.968 C 79.171 26.795 76.555 26.437 77.71 26.052 C 69.855 28.684 74.209 15.87 68.532 14.285 C 67.02 16.93 65.584 14.781 65.06 15.016 C 64.772 15.146 63.045 16.783 62.622 17.309 C 62.916 16.752 63.513 15.068 63.074 15.056 C 61.587 17.482 56.708 10.4 55.465 10 C 55.449 10.122 55.229 10.583 54.846 11.313 C 55.268 16.552 49.425 29.491 48.078 31.56 Z" />
            </Icon>
        </Wrapper>
    )
}

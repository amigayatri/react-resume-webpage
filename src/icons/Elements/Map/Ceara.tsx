import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const CearaIcon = (props: SVGProps) => {
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
                <path d="M 22.231 12.987 C 22.289 13.321 22.292 13.665 22.238 14.016 C 22.089 16.509 21.065 20.79 20.836 23.324 C 22.59 27.496 24.156 34.731 25.152 36.759 C 26.731 40.06 24.906 43.728 23.645 47.309 C 22.869 51.616 23.452 54.387 27.714 59.353 C 32.933 65.415 28.32 78.332 32.466 86.008 C 32.062 86.967 31.897 87.79 31.9 88.517 C 32.607 90.227 33.611 91.746 35.028 92.996 C 35.786 93.519 36.584 94.026 37.319 94.577 C 37.359 94.599 37.395 94.623 37.435 94.645 C 40.575 96.279 40.62 98.183 39.842 100.127 C 39.836 100.163 39.839 100.192 39.831 100.228 C 39.461 102.016 38.386 104.032 37.288 106.111 C 37.282 106.919 37.596 107.683 38.453 108.382 C 38.553 108.462 38.663 108.521 38.767 108.594 C 42.226 111.003 47.354 108.885 51.036 107.867 C 51.622 107.704 52.173 107.57 52.672 107.488 C 55.819 106.974 58.212 108.07 60.273 109.77 C 62.836 111.884 64.88 114.933 67.205 117.005 C 67.709 117.463 68.272 117.733 68.863 117.882 C 71.397 118.515 74.534 116.531 76.813 113.844 C 77.034 113.209 77.452 112.406 78.16 111.351 C 81.024 107.081 71.355 92.346 73.553 88.997 C 74.485 87.619 76.774 86.172 79.768 84.823 C 79.752 84.805 79.74 84.785 79.726 84.765 C 79.642 84.641 79.605 84.5 79.611 84.347 C 79.631 83.79 80.188 83.06 81.016 82.283 C 83.4 80.045 87.956 77.424 87.928 77.485 C 90.077 74.596 92.174 70.605 93.927 66.749 C 94.674 65.104 95.366 63.481 95.961 61.984 C 96.042 61.781 96.176 61.551 96.34 61.305 C 97.589 59.43 101.057 56.452 103.739 54.415 C 105.628 52.981 107.126 52.012 107.164 52.238 C 106.604 48.781 94.841 43.102 92.38 40.724 C 85.377 34.049 80.154 29.342 72.633 23.636 C 53.805 9.491 43.578 8.597 20.963 11.078 C 21.455 11.437 21.778 11.828 21.988 12.238 C 22.021 12.269 22.074 12.305 22.087 12.331 C 22.165 12.487 22.207 12.719 22.231 12.987 Z" />
            </Icon>
        </Wrapper>
    )
}

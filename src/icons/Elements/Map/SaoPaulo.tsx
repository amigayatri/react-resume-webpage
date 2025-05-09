import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const SaoPauloIcon = (props: SVGProps) => {
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
                <path d="M 117.978 64.72 C 114.914 62.923 113.381 65.368 111.514 62.591 C 106.383 63.262 102.189 63.69 99.556 64.136 C 99.556 65.681 93.846 71.449 90.493 65.476 C 90.493 65.476 87.257 57.724 87.491 57.783 C 87.602 57.754 89.766 51.925 89.879 51.253 C 90.696 47.525 84.514 50.439 83.761 48.925 C 82.827 47 81.252 44.057 81.456 41.873 C 83.264 40.591 83.235 39.337 81.371 38.083 C 80.265 36.918 80.089 35.632 80.817 34.175 C 78.339 32.66 77.556 31.32 74.754 31.556 C 73.181 31.702 70.439 35.458 68.896 32.224 C 69.831 34.467 64.44 33.043 63.476 33.884 C 60.972 32.605 61.583 36.042 60.939 37.151 C 60.794 37.385 59.86 34.061 59.805 34 C 58.582 32.749 56.861 38.431 56.075 33.941 C 56.891 29.572 51.12 31.058 47.914 30.822 C 43.03 30.456 42.066 29.182 37.751 31.333 C 34.512 33.405 30.114 36.698 28.798 39.189 C 26.408 43.677 23.726 48.866 22.269 53.061 C 20.172 59.182 13.468 59.909 10 64.545 C 10.175 64.744 11.016 64.813 12.155 64.828 C 14.998 64.864 19.756 64.55 21.047 65.011 C 21.397 61.688 26.904 65.271 28.624 65.303 C 29.936 65.303 39.177 68.332 39.348 68.159 C 41.943 68.597 48.094 66.995 48.996 70.14 C 53.017 69.995 52.289 75.94 52.842 78.009 C 53.627 81.04 55.698 83.11 56.833 86.287 C 57.416 87.832 54.211 89.814 57.301 90.396 C 58.552 90.629 61.089 90.132 62.545 90.307 C 66.859 90.776 63.946 94.913 64.996 95.117 C 66.45 95.439 68.783 93.574 69.278 95.03 C 69.746 96.313 71.228 97.654 70.967 97.886 C 70.992 97.865 71.025 97.835 71.052 97.811 C 74.044 95.206 87.36 79.545 91.864 81.568 C 94.31 82.676 97.17 77.139 101.715 79.527 C 103.23 80.256 104.454 74.37 106.783 75.881 C 110.046 73.967 109.995 75.285 109.923 73.029 C 109.799 72.706 109.681 72.337 109.582 71.86 C 108.242 68.915 118.531 66.758 117.978 64.72 Z" />
            </Icon>
        </Wrapper>
    )
}

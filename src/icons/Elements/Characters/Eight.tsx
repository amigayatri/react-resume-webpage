import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const EightIcon = (props: SVGProps) => {
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
                viewBox="0 0 48 48"
            >
                <title>{alt}</title>
                <path
                    fill={color}
                    d="M 35.295 13.766 C 35.295 15.692 34.682 17.356 33.455 18.764 C 32.228 20.169 30.521 21.466 28.331 22.655 C 30.842 23.617 32.894 24.972 34.488 26.717 C 36.084 28.464 36.88 30.573 36.88 33.045 C 36.88 35.195 36.337 37.097 35.253 38.749 C 34.167 40.4 32.654 41.688 30.709 42.613 C 28.765 43.537 26.501 44 23.915 44 C 21.255 44 18.965 43.524 17.05 42.571 C 15.135 41.617 13.667 40.32 12.648 38.678 C 11.629 37.035 11.12 35.177 11.12 33.101 C 11.12 30.647 11.851 28.6 13.314 26.958 C 14.775 25.316 16.705 23.938 19.103 22.825 C 17.026 21.919 15.442 20.758 14.346 19.344 C 13.253 17.927 12.705 16.135 12.705 13.965 C 12.705 12.153 13.077 10.615 13.824 9.35 C 14.568 8.085 15.522 7.057 16.683 6.265 C 17.843 5.472 19.075 4.896 20.376 4.537 C 21.678 4.179 22.877 4 23.972 4 C 25.255 4 26.557 4.179 27.878 4.537 C 29.199 4.896 30.422 5.463 31.545 6.236 C 32.667 7.01 33.574 8.02 34.262 9.265 C 34.951 10.511 35.295 12.012 35.295 13.766 Z M 33.059 33.129 C 33.059 31.243 32.558 29.761 31.558 28.685 C 30.558 27.609 29.205 26.717 27.495 26.01 C 25.788 25.303 23.867 24.59 21.735 23.873 C 20.565 24.364 19.461 24.995 18.424 25.769 C 17.385 26.544 16.545 27.535 15.905 28.742 C 15.263 29.949 14.942 31.459 14.942 33.271 C 14.942 35.667 15.686 37.535 17.177 38.875 C 18.668 40.215 20.876 40.885 23.802 40.885 C 26.745 40.885 29.025 40.155 30.638 38.693 C 32.252 37.229 33.059 35.375 33.059 33.129 Z M 16.272 14.049 C 16.272 15.71 16.658 16.989 17.433 17.885 C 18.205 18.782 19.301 19.499 20.715 20.036 C 22.132 20.575 23.784 21.145 25.67 21.749 C 27.634 20.693 29.134 19.607 30.172 18.495 C 31.209 17.381 31.728 15.834 31.728 13.852 C 31.728 11.719 31.049 10.039 29.69 8.813 C 28.331 7.585 26.425 6.973 23.972 6.973 C 21.555 6.973 19.669 7.6 18.31 8.855 C 16.951 10.11 16.272 11.842 16.272 14.049 Z"
                />
            </Icon>
        </Wrapper>
    )
}

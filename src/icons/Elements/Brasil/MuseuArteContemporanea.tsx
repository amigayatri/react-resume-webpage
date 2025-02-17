import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const MuseuArteContemporaneaIcon = (props: SVGProps) => {
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
                viewBox="0 0 120 120"
            >
                <title>{alt}</title>
                <path d="M 15.534 77.82 C 15.594 77.99 15.674 78.15 15.784 78.29 C 23.684 92.6 40.534 102.5 60.004 102.5 C 87.024 102.5 109.004 83.43 109.004 60 C 109.004 52.41 106.684 45 102.284 38.5 L 107.544 27.15 C 107.834 26.53 107.784 25.81 107.414 25.23 C 107.044 24.65 106.414 24.31 105.724 24.31 L 86.614 24.31 C 78.694 19.86 69.504 17.5 60.004 17.5 C 50.504 17.5 41.314 19.86 33.394 24.31 L 13.004 24.31 C 12.324 24.31 11.684 24.66 11.314 25.23 C 10.944 25.81 10.894 26.53 11.184 27.15 L 16.974 39.63 C 13.074 45.84 11.004 52.88 11.004 60 C 11.004 66.36 12.634 72.4 15.534 77.82 Z M 60.004 98.5 C 43.334 98.5 28.754 90.69 20.984 79.14 L 99.034 79.14 C 91.254 90.69 76.674 98.5 60.004 98.5 Z M 46.424 58.35 L 37.384 58.35 C 32.944 58.35 28.864 55.74 26.994 51.71 L 25.794 49.12 L 92.954 49.12 L 91.754 51.71 C 89.884 55.74 85.804 58.35 81.364 58.35 L 72.304 58.35 C 67.264 58.35 63.154 62.45 63.154 67.5 L 63.154 75.14 L 55.574 75.14 L 55.574 67.5 C 55.574 62.45 51.474 58.35 46.424 58.35 Z M 43.294 37.81 L 43.294 45.12 L 35.084 45.12 L 35.084 37.81 L 43.294 37.81 Z M 56.704 37.81 L 56.704 45.12 L 47.284 45.12 L 47.284 37.81 L 56.704 37.81 Z M 68.924 37.81 L 68.924 45.12 L 60.704 45.12 L 60.704 37.81 L 68.924 37.81 Z M 82.074 37.81 L 82.074 45.12 L 72.924 45.12 L 72.924 37.81 L 82.074 37.81 Z M 98.194 37.81 L 94.804 45.12 L 86.074 45.12 L 86.074 37.81 L 98.194 37.81 Z M 31.074 45.12 L 23.934 45.12 L 20.544 37.81 L 31.074 37.81 L 31.074 45.12 Z M 105.004 60 C 105.004 65.37 103.704 70.49 101.374 75.14 L 67.164 75.14 L 67.164 67.5 C 67.164 64.66 69.474 62.35 72.314 62.35 L 81.354 62.35 C 87.354 62.35 92.854 58.84 95.374 53.4 L 100.264 42.85 C 103.364 48.15 105.004 54.01 105.004 60 Z M 60.004 21.5 C 65.844 21.5 71.544 22.47 76.864 24.31 L 43.144 24.31 C 48.464 22.47 54.164 21.5 60.004 21.5 Z M 102.594 28.31 L 100.044 33.81 C 100.034 33.81 100.014 33.81 100.004 33.81 L 18.684 33.81 L 16.134 28.31 L 102.594 28.31 L 102.594 28.31 Z M 23.364 53.39 C 25.884 58.83 31.394 62.34 37.384 62.34 L 46.424 62.34 C 49.264 62.34 51.574 64.65 51.574 67.49 L 51.574 75.13 L 18.634 75.13 C 16.304 70.49 15.004 65.37 15.004 60 C 15.004 54.5 16.394 49.05 19.034 44.07 L 23.364 53.39 Z" />
            </Icon>
        </Wrapper>
    )
}

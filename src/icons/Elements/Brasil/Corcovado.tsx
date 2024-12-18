import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const CorcovadoIcon = (props: SVGProps) => {
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
                <path d="M 81 23.91 C 79.98 23.49 78.81 23.98 78.39 25 C 77.97 26.02 78.46 27.19 79.48 27.61 C 94.98 33.99 105 47.62 105 62.32 C 105 74.89 97.93 86.06 87.01 93.09 C 85.19 82.67 78.7 51.7 65 45.43 L 65 30.13 L 73.39 28.45 C 74.47 28.23 75.18 27.18 74.96 26.1 C 74.74 25.02 73.69 24.31 72.61 24.53 L 64.81 26.09 C 64.54 23.4 63.98 20.78 63.14 18.38 L 62.8 17.4 C 62.32 16.03 61.24 15.17 59.98 15.17 C 59.98 15.17 59.98 15.17 59.97 15.17 C 58.71 15.17 57.63 16.02 57.15 17.38 L 56.82 18.32 C 55.97 20.74 55.39 23.37 55.11 26.09 L 47.4 24.53 C 46.31 24.31 45.26 25.01 45.04 26.09 C 44.82 27.17 45.52 28.23 46.6 28.45 L 54.9 30.13 L 54.9 45.41 C 40.7 51.66 34.57 83.06 32.95 93.07 C 22.06 86.04 15 74.87 15 62.32 C 15 47.64 24.55 34.44 39.91 27.86 C 40.93 27.43 41.4 26.25 40.96 25.23 C 40.53 24.21 39.35 23.74 38.33 24.18 C 21.48 31.4 11 46.01 11 62.32 C 11 77.22 19.9 90.35 33.31 97.94 C 33.45 98.04 33.6 98.13 33.77 98.2 C 41.36 102.39 50.35 104.83 60 104.83 C 69.63 104.83 78.61 102.4 86.19 98.22 C 86.38 98.15 86.56 98.05 86.71 97.93 C 100.11 90.34 109 77.22 109 62.33 C 109 45.99 98.01 30.91 81 23.91 Z M 58.9 29.93 C 58.9 27.08 59.26 24.27 59.96 21.67 C 60.64 24.24 61 27.03 61 29.84 L 61 44.35 C 60.67 44.32 60.34 44.3 60 44.3 C 59.63 44.3 59.26 44.32 58.9 44.35 L 58.9 29.93 Z M 36.66 95.23 C 38.73 80.96 46.32 48.32 60 48.32 C 72.91 48.32 80.97 80.94 83.32 95.24 C 76.52 98.78 68.53 100.82 60 100.82 C 51.46 100.82 43.47 98.77 36.66 95.23 Z" />
            </Icon>
        </Wrapper>
    )
}

import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const BondinhoIcon = (props: SVGProps) => {
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
                <path d="M 107.62 50.01 C 106.86 47.3 105.81 44.69 104.48 42.21 C 104.42 42.07 104.35 41.93 104.27 41.81 C 96.4 27.45 79.51 17.5 60 17.5 C 44.06 17.5 29.87 24.14 20.92 34.4 C 20.77 34.53 20.64 34.69 20.53 34.86 C 14.54 41.9 11 50.6 11 60 C 11 83.43 32.98 102.5 60 102.5 C 87.02 102.5 109 83.43 109 60 C 109 56.64 108.54 53.38 107.68 50.25 C 107.67 50.17 107.64 50.09 107.62 50.01 Z M 60.96 76.41 L 75.35 76.41 C 76.45 76.41 77.35 75.51 77.35 74.41 C 77.35 73.31 76.45 72.41 75.35 72.41 L 60.99 72.41 C 61.13 71 62.3 69.9 63.75 69.9 L 71.89 69.9 L 71.91 69.9 L 80.06 69.9 C 81.59 69.9 82.84 71.15 82.84 72.68 L 82.84 78.95 C 82.84 80.48 81.59 81.73 80.06 81.73 L 63.75 81.73 C 62.22 81.73 60.97 80.48 60.97 78.95 L 60.97 76.41 L 60.96 76.41 Z M 36.71 48.6 C 36.18 47.26 35.69 46.02 35.23 44.93 L 101.41 44.93 C 102.01 46.12 102.53 47.35 102.99 48.6 L 36.71 48.6 Z M 83.45 52.6 L 71.92 64.94 L 60.74 52.6 L 83.45 52.6 Z M 99.07 40.93 L 33.4 40.93 C 33.28 40.71 33.17 40.5 33.06 40.33 C 30.91 36.78 28.5 35.12 26.45 34.37 C 34.7 26.48 46.68 21.5 60 21.5 C 76.71 21.5 91.31 29.34 99.07 40.93 Z M 15 60 C 15 51.73 18.07 44.07 23.28 37.79 C 24.39 37.77 27.11 38.21 29.65 42.4 C 30.45 43.73 31.81 46.95 33.49 51.31 C 33.5 51.34 33.51 51.38 33.53 51.41 C 38.15 63.4 45.15 83.91 49.66 97.46 C 29.81 93.45 15 78.18 15 60 Z M 60 98.5 C 58 98.5 56.03 98.38 54.1 98.16 C 52.17 92.35 44.06 68.04 38.25 52.6 L 55.35 52.6 L 67.4 65.9 L 63.76 65.9 C 60.02 65.9 56.98 68.94 56.98 72.68 L 56.98 78.95 C 56.98 82.69 60.02 85.73 63.76 85.73 L 80.07 85.73 C 83.81 85.73 86.85 82.69 86.85 78.95 L 86.85 72.68 C 86.85 68.94 83.81 65.9 80.07 65.9 L 76.52 65.9 L 88.94 52.6 L 104.17 52.6 C 104.71 55 105 57.47 105 60 C 105 81.23 84.81 98.5 60 98.5 Z" />
            </Icon>
        </Wrapper>
    )
}

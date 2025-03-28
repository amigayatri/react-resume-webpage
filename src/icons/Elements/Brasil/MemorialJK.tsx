import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const MemorialJKIcon = (props: SVGProps) => {
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
                <path d="M 85.93 27.178 C 86.79 27.008 87.59 26.868 88.3 26.758 C 89.23 26.608 89.93 25.828 89.98 24.898 C 90.03 23.958 89.42 23.108 88.52 22.858 L 57.66 14.338 C 57.21 14.208 56.72 14.248 56.29 14.448 C 55.74 14.698 49.01 17.848 42.82 23.438 C 42.82 23.438 42.82 23.438 42.82 23.438 C 23.79 29.598 11 45.598 11 63.238 C 11 86.668 32.98 105.738 60 105.738 C 87.02 105.738 109 86.668 109 63.238 C 109 48.558 100.1 34.868 85.93 27.178 Z M 57.32 18.388 L 79.55 24.528 C 67.85 27.478 47.73 34.508 47.73 47.978 C 47.73 55.908 54.16 63.258 58.69 67.458 L 56.35 67.458 C 50.77 63.998 37.59 54.238 36.44 46.038 C 34.33 30.818 53.54 20.298 57.32 18.388 Z M 15 63.238 C 15 49.708 23.46 37.208 36.69 30.318 C 33.57 34.888 31.61 40.348 32.48 46.588 C 33.97 57.268 49.66 67.938 53.78 70.568 L 53.78 101.368 C 31.91 98.768 15 82.668 15 63.238 Z M 57.79 101.688 L 57.79 71.458 L 62.21 71.458 L 62.21 101.698 C 61.48 101.728 60.74 101.748 60 101.748 C 59.26 101.748 58.52 101.718 57.79 101.688 Z M 66.21 101.368 L 66.21 69.458 C 66.21 69.398 66.2 69.348 66.19 69.298 C 66.18 69.238 66.18 69.168 66.17 69.108 C 66.16 69.038 66.14 68.968 66.12 68.898 C 66.1 68.838 66.09 68.788 66.07 68.738 C 66.04 68.668 66.01 68.608 65.98 68.548 C 65.95 68.498 65.93 68.438 65.9 68.388 C 65.86 68.328 65.82 68.278 65.77 68.218 C 65.73 68.168 65.7 68.128 65.66 68.078 C 65.61 68.018 65.55 67.978 65.49 67.928 C 65.46 67.898 65.43 67.868 65.39 67.838 C 65.36 67.808 64.44 67.148 63.11 66.008 L 63.11 59.138 L 69.26 56.148 C 70.25 55.668 70.67 54.468 70.18 53.478 C 69.7 52.488 68.5 52.068 67.51 52.558 L 63.06 54.718 C 62.86 53.828 62.07 53.158 61.11 53.158 C 60.01 53.158 59.11 54.058 59.11 55.158 L 59.11 62.228 C 55.53 58.458 51.74 53.228 51.74 47.978 C 51.74 38.148 67.79 31.738 79.68 28.618 C 95.07 35.038 105.01 48.618 105.01 63.248 C 105 82.668 88.09 98.768 66.21 101.368 Z" />
            </Icon>
        </Wrapper>
    )
}

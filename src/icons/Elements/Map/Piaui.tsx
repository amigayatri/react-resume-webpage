import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const PiauiIcon = (props: SVGProps) => {
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
                <path d="M 70.51 23.194 C 69.735 24.949 66.539 28.095 67.065 30.157 C 67.625 32.174 69.421 33.4 67.375 35.4 C 68.059 38.563 70.848 43.45 66.939 45.729 C 61.729 50.692 69.548 54.245 68.43 58.864 C 67.411 63.084 61.359 65.347 58.071 62.012 C 52.581 61.888 50.289 66.34 46.286 69.317 C 43.184 71.629 36.328 72.14 34.591 75.706 C 32.42 80.156 30.402 85.631 28.543 90.191 C 27.061 93.861 32.148 104.487 29.01 107.538 C 28.954 108.148 28.83 108.704 28.603 109.176 C 29.612 108.453 30.497 108.207 31.298 108.284 C 36.456 108.775 37.953 123.109 44.231 116.049 C 46.496 113.504 52.388 114.87 53.105 112.419 C 54.998 108.775 59.493 106.79 56.703 102.477 C 50.25 92.508 70.598 99.47 70.257 99.811 C 71.589 99.827 80.957 95.948 81.58 95.188 C 83.594 92.838 85.867 90.897 88.097 88.793 C 88.957 87.982 89.81 87.149 90.639 86.255 C 93.023 83.045 98.639 82.658 98.329 77.401 C 95.822 75.833 96.094 73.7 97.029 71.51 C 97.345 70.769 97.732 70.023 98.119 69.289 C 98.785 68.029 99.437 66.807 99.66 65.722 C 99.665 65.7 99.663 65.682 99.666 65.66 C 99.981 64.026 99.178 63.078 98.135 62.295 C 97.691 61.96 97.207 61.654 96.747 61.336 C 95.734 60.638 94.856 59.879 94.85 58.621 C 94.849 58.181 94.949 57.681 95.194 57.1 C 92.681 52.445 95.477 44.615 92.312 40.939 C 89.728 37.928 89.375 36.249 89.845 33.637 C 90.041 32.549 90.379 31.303 90.761 29.725 C 91.385 27.35 88.436 22.868 88.125 19.89 C 88.104 19.683 88.114 19.41 88.143 19.094 C 88.282 17.557 88.902 14.962 88.993 13.451 C 89.007 13.212 89.006 13.004 88.989 12.828 C 88.974 12.666 88.948 12.525 88.901 12.43 C 88.894 12.415 88.861 12.393 88.842 12.374 C 88.305 11.868 83.521 10.368 82.02 10 C 81.727 12.162 78.233 16.724 78.233 16.757 C 76.68 20.14 72.522 18.698 70.51 23.194 Z" />
            </Icon>
        </Wrapper>
    )
}

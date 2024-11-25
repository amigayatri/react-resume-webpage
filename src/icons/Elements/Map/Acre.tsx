import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const AcreIcon = (props: SVGProps) => {
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
                viewBox="0 0 128 128"
            >
                <title>{alt}</title>
                <path d="M 70.054 53.547 C 68.529 52.671 67.015 51.777 65.524 50.837 C 53.952 46.713 41.592 44.837 29.853 41.237 C 23.888 39.408 18.082 37.136 12.627 33.885 C 12.566 33.849 12.504 33.818 12.443 33.782 C 12.446 33.785 12.446 33.786 12.448 33.788 C 16.255 38.202 9.841 35.889 10.003 39.977 C 10.056 41.66 14.02 46.488 14.691 47.674 C 17.416 52.557 29.569 63.526 21.431 67.932 C 25.747 68.392 33.462 68.198 35.073 72.813 C 35.744 74.763 36.294 77.928 39.054 77.982 C 49.899 78.211 51.862 72.99 60.674 68.921 C 61.646 70.107 59.189 76.689 59.065 78.548 C 58.781 83.254 59.683 87.979 59.278 92.684 C 60.145 91.833 73.148 92.081 75.609 91.905 C 80.563 91.568 85.941 94.877 89.815 94.098 C 94.009 93.266 95.336 87.214 99.122 87.303 C 103.422 87.41 101.316 87.94 105.101 84.775 C 108.197 82.174 114.338 78.069 118 76.512 C 116.443 75.692 114.872 74.902 113.294 74.124 C 104.41 69.744 95.237 65.938 86.24 61.785 C 80.739 59.247 75.31 56.567 70.054 53.547 Z" />
            </Icon>
        </IconWrapper>
    )
}

import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const AmapaIcon = (props: SVGProps) => {
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
                <path d="M 18.95 56.357 C 19.984 62.237 40.498 65.809 40.232 69.422 C 46.115 66.935 49.008 90.345 51.878 93.104 C 52.464 100.088 62.212 107.178 63.468 113.668 C 64.497 119.235 75.05 119.596 76.932 113.823 C 81.158 100.491 92.826 97.395 99.02 86.527 C 100.84 83.349 102.135 82.073 103.176 81.887 C 104.094 79.247 105.037 77.3 105.984 76.4 C 111.374 71.258 111.423 63.806 105.857 61.09 C 103.605 59.968 92.565 46.994 92.834 46.858 C 90.41 35.88 90.32 16.979 80.394 10 C 73.974 15.609 72.315 28.271 64.952 34.065 C 64.59 39.922 59.609 51.798 52.963 53.078 C 47.465 54.156 44.077 48.701 38.149 49.688 C 33.908 50.385 32.742 54.45 27.376 52.541 C 24.422 51.476 21.98 48.467 17.971 48.285 C 19.169 50.342 19.37 53.475 18.95 56.357 Z" />
            </Icon>
        </IconWrapper>
    )
}

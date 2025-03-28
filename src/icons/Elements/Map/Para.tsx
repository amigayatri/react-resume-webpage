import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const ParaIcon = (props: SVGProps) => {
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
                <path d="M 11.264 29.056 C 11.137 29.505 10.682 30.143 10 30.91 C 10.982 31.587 11.597 32.576 11.489 33.897 C 10.698 36.287 16.068 44.306 18.548 42.247 C 20.197 46.436 23.578 45.375 26.147 48.125 C 29.867 52.114 29.338 50.605 34.407 50.204 C 32.757 52.834 31.905 53.715 30.557 56.674 C 28.257 61.684 26.067 66.733 23.837 71.772 C 22.057 75.792 13 88.91 15.729 92.539 C 16.143 93.09 16.555 93.822 16.959 94.677 C 17.094 94.77 17.178 94.861 17.186 94.945 C 17.484 95.214 17.735 95.582 17.946 96.031 C 18.945 96.867 20.558 101.31 20.72 101.667 C 21.521 103.456 21.011 105.666 22.13 107.255 C 23.16 108.706 25.47 108.814 26.43 110.365 C 28.72 114.115 34.348 113.385 38.938 113.765 C 53.654 114.973 68.4 115.714 83.096 117.233 C 83.096 117.233 83.097 117.232 83.097 117.232 C 83.879 112.521 88.236 109.183 90.457 105.353 C 91.477 103.584 92.137 101.583 92.198 99.513 C 90.518 98.893 90.235 97.844 90.916 96.345 C 92.036 93.775 91.035 91.797 94.034 90.756 C 95.235 90.347 98.074 87.868 98.493 86.857 C 98.873 85.907 99.073 82.508 99.672 81.867 C 101.873 79.507 97.296 79.317 95.794 78.747 C 95.847 78.647 95.908 78.553 95.967 78.457 C 97.578 75.762 101.111 74.342 103.293 72.209 C 105.311 72.579 105.574 69.759 106.953 69.048 C 106.874 67.65 109.692 63.788 110.351 62.31 C 110.931 60.96 112.254 58.571 113.072 57.32 C 114.05 55.818 118.29 46.43 117.984 42.626 C 117.952 42.228 117.872 41.892 117.732 41.632 C 117.45 41.103 113.832 40.672 113.95 40.723 C 111.212 39.813 108.712 38.493 105.294 38.073 C 104.533 37.984 95.493 38.442 98.554 35.244 C 96.515 33.755 93.157 34.524 90.835 33.043 C 89.595 32.244 89.037 29.895 87.495 29.594 C 84.598 31.081 84.266 26.489 82.808 26.749 C 82.345 26.832 81.767 27.399 80.957 28.815 C 78.198 33.656 73.001 35.035 71.117 40.973 C 70.279 43.545 65.58 43.384 65.121 40.904 C 64.561 38.014 60.219 34.855 59.959 31.745 C 58.68 30.514 57.392 20.088 54.77 21.197 C 54.889 19.588 45.752 17.997 45.292 15.377 C 45.479 14.093 45.39 12.697 44.855 11.781 C 44.361 10.935 43.489 10.495 42.092 10.947 C 40.093 11.587 36.902 10.608 35.703 10.997 C 32.794 11.938 36.382 14.777 35.923 16.106 C 35.104 18.457 26.496 14.597 25.204 15.826 C 24.275 15.576 23.606 15.916 23.214 16.837 C 22.906 18.226 22.054 18.616 20.644 18.028 C 18.054 18.498 19.304 19.977 16.974 19.307 C 15.316 18.827 12.855 24.017 11.205 22.097 C 11.198 22.358 11.157 22.734 11.084 23.206 C 11.302 25.136 11.802 27.186 11.264 29.056 Z" />
            </Icon>
        </Wrapper>
    )
}

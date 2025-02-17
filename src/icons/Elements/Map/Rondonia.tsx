import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const RondoniaIcon = (props: SVGProps) => {
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
                <path d="M 108.72 106.844 C 111.063 103.499 113.197 91.382 117.602 91.086 C 119.257 88.373 115.186 86.142 115.614 83.541 C 110.319 78.672 116.301 77.24 116.115 72.706 C 115.91 67.784 103.014 67.354 99.483 67.615 C 97.012 67.801 93.907 68.378 91.492 67.488 C 92.161 62.71 90.785 59.272 90.766 54.98 C 90.747 51.877 92.514 47.954 91.899 44.87 C 91.753 44.038 89.522 41.454 89.929 40.433 C 93.513 40.15 91.249 36.426 91.986 34.204 C 91.956 33.805 91.899 33.462 91.813 33.174 C 90.698 29.445 85.17 34.439 83.68 33.408 C 81.226 31.736 79.276 29.67 78.737 27.479 C 77.308 21.734 60.489 14.117 57.515 22.926 C 57.347 22.255 53.964 29.411 53.781 29.745 C 50.974 35.021 50.138 35.209 44.116 35.898 C 38.765 36.491 39.23 43.181 35.067 42.846 C 36.333 39.28 29.456 40.17 31.185 43.274 C 26.704 41.9 28.025 45.395 23.937 43.441 C 22.191 42.81 20.405 42.531 18.566 42.622 C 17.389 42.607 12.505 45.947 10.569 48.185 C 10.335 48.455 10.136 48.711 10 48.941 C 13.551 50.894 24.922 49.557 28.506 49.408 C 31.701 49.295 32.575 43.738 33.096 51.99 C 33.338 55.763 30.587 58.995 31.925 62.583 C 33.15 64.515 33.671 66.596 33.503 68.863 C 30.811 71.726 35.642 83.473 38.113 84.067 C 40.584 82.097 46.309 91.184 48.799 91.296 C 56.252 92.875 62.959 91.204 68.442 96.464 C 71.47 99.362 74.684 100.739 78.829 101.798 C 82.655 102.783 83.513 107.277 86.782 108.153 C 90.389 109.099 95.611 106.573 99.104 107.76 C 105.214 109.872 102.103 109.189 107.848 107.617 C 108.221 107.364 108.537 107.108 108.72 106.844 Z" />
            </Icon>
        </Wrapper>
    )
}

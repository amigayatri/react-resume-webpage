import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const RioDeJaneiroIcon = (props: SVGProps) => {
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
                <path d="M 108.529 38.452 C 107.071 38.208 105.646 37.869 104.233 37.486 C 102.983 37.23 101.94 36.897 101.074 36.507 C 99.735 36.039 98.405 35.533 97.088 34.948 C 97.085 34.318 97.13 33.631 97.173 32.923 C 95.249 29.078 97.16 25.274 87.288 30.367 C 80.542 33.81 83.715 50.749 78.29 53.663 C 71.946 57.106 64.861 59.149 58.71 62.932 C 58.57 58.294 48.052 62 46.728 62.529 C 36.346 60.288 23.642 69.476 13.317 71.134 C 13.775 72.062 14.218 72.797 14.657 73.449 C 18.895 79.754 22.377 74.2 29.334 78.282 C 30.588 82.908 7.229 87.804 10.274 94.492 C 10.5 95.572 10.767 96.411 11.052 97.145 C 13.921 104.6 19.175 95.609 15.578 95.2 C 15.734 89.569 23.581 91.978 24.917 87.916 C 26.246 88.098 34.055 88.512 33.112 88.117 C 37.807 84.017 40.925 86.737 44.952 88.46 C 41.505 88.725 38.341 89.51 34.963 90.378 C 34.494 91.903 51.108 89.124 52.958 89.259 C 55 89.322 54.745 82.637 54.745 82.637 C 56.201 80.649 58.188 79.729 60.697 79.922 C 57.452 93.293 73.01 86.605 83.127 87.604 C 95.365 88.728 88.754 80.588 91.263 75.759 C 96.819 65.171 118.585 68.217 117.988 54.589 C 117.558 44.829 118.033 41.784 112.965 39.744 C 111.869 39.302 110.53 38.901 108.846 38.496 C 108.735 38.48 108.639 38.466 108.529 38.452 Z" />
            </Icon>
        </Wrapper>
    )
}

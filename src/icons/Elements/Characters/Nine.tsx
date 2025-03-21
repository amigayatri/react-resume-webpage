import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const NineIcon = (props: SVGProps) => {
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
                viewBox="-10 0 48 48"
            >
                <title>{alt}</title>
                <path
                    fill={color}
                    d="M 13.958 4 C 16.649 4 18.892 4.64 20.686 5.92 C 22.48 7.2 23.82 9.022 24.708 11.386 C 25.596 13.75 26.039 16.577 26.039 19.865 C 26.039 23.808 25.666 27.102 24.918 29.746 C 24.171 32.391 23.007 34.577 21.428 36.306 C 19.849 38.034 17.817 39.487 15.332 40.664 C 12.846 41.842 9.866 42.954 6.39 44 L 5.521 41.197 C 9.277 40.113 12.393 38.838 14.869 37.371 C 17.345 35.904 19.2 34.03 20.433 31.751 C 21.667 29.471 22.283 26.593 22.283 23.117 L 22.395 20.538 C 22.395 17.174 22.073 14.512 21.428 12.549 C 20.784 10.587 19.84 9.186 18.597 8.345 C 17.355 7.504 15.818 7.083 13.986 7.083 C 11.202 7.083 9.114 7.896 7.721 9.522 C 6.329 11.148 5.633 13.502 5.633 16.586 C 5.633 19.688 6.301 21.958 7.637 23.397 C 8.973 24.836 10.865 25.556 13.313 25.556 C 15.425 25.556 17.238 24.939 18.751 23.706 C 20.265 22.472 21.676 20.819 22.984 18.744 L 22.984 22.584 C 21.9 24.304 20.531 25.733 18.878 26.873 C 17.224 28.013 15.266 28.583 13.005 28.583 C 10.837 28.583 8.922 28.097 7.259 27.125 C 5.596 26.154 4.297 24.752 3.363 22.921 C 2.428 21.089 1.961 18.884 1.961 16.306 C 1.961 13.559 2.503 11.274 3.587 9.452 C 4.671 7.63 6.119 6.266 7.932 5.359 C 9.744 4.453 11.753 4 13.958 4 Z"
                />
            </Icon>
        </Wrapper>
    )
}

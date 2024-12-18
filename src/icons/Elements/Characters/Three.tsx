import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const ThreeIcon = (props: SVGProps) => {
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
                    d="M 13.433 4 C 15.773 4 17.807 4.439 19.534 5.316 C 21.26 6.194 22.6 7.364 23.553 8.827 C 24.506 10.289 24.983 11.898 24.983 13.653 C 24.983 15.201 24.629 16.621 23.921 17.914 C 23.214 19.206 22.294 20.268 21.161 21.098 C 20.029 21.929 18.812 22.448 17.51 22.655 C 18.944 22.731 20.326 23.146 21.657 23.901 C 22.987 24.656 24.082 25.722 24.941 27.1 C 25.799 28.477 26.229 30.157 26.229 32.139 C 26.229 34.403 25.677 36.432 24.573 38.225 C 23.469 40.018 21.935 41.429 19.972 42.457 C 18.01 43.486 15.754 44 13.207 44 C 11.244 44 9.21 43.613 7.106 42.839 C 5.002 42.066 3.223 40.782 1.77 38.989 L 4.431 37.008 C 5.526 38.31 6.866 39.287 8.451 39.938 C 10.036 40.589 11.631 40.914 13.235 40.914 C 16.179 40.914 18.458 40.141 20.071 38.593 C 21.685 37.046 22.492 34.96 22.492 32.337 C 22.492 30.336 22.114 28.765 21.36 27.624 C 20.605 26.482 19.586 25.67 18.302 25.189 C 17.019 24.708 15.585 24.467 13.999 24.467 L 10.829 24.467 L 11.282 21.438 L 13.49 21.438 C 14.792 21.438 16.042 21.179 17.241 20.66 C 18.439 20.141 19.425 19.339 20.199 18.253 C 20.973 17.168 21.36 15.795 21.36 14.134 C 21.36 11.775 20.586 9.992 19.038 8.784 C 17.491 7.576 15.641 6.972 13.49 6.972 C 11.772 6.972 10.281 7.265 9.017 7.85 C 7.753 8.435 6.45 9.36 5.11 10.624 L 3.072 8.246 C 4.695 6.737 6.384 5.651 8.139 4.991 C 9.895 4.33 11.659 4 13.433 4 Z"
                    id="object-0"
                />
            </Icon>
        </Wrapper>
    )
}

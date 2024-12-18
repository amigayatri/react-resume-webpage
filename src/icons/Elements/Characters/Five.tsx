import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const FiveIcon = (props: SVGProps) => {
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
                viewBox="0 0 48 48"
            >
                <title>{alt}</title>
                <path
                    fill={color}
                    d="M 34.574 4 L 33.942 7.042 L 18.017 7.042 L 18.017 20.671 C 19.299 19.964 20.485 19.481 21.575 19.222 C 22.665 18.964 23.852 18.835 25.133 18.835 C 27.314 18.835 29.203 19.308 30.8 20.255 C 32.398 21.202 33.632 22.589 34.502 24.416 C 35.372 26.243 35.808 28.467 35.808 31.088 C 35.808 33.689 35.291 35.961 34.258 37.902 C 33.225 39.844 31.762 41.346 29.868 42.407 C 27.974 43.469 25.726 44 23.125 44 C 20.886 44 18.892 43.613 17.142 42.838 C 15.391 42.063 13.742 40.978 12.192 39.581 L 14.488 37.257 C 15.769 38.481 17.123 39.39 18.548 39.983 C 19.973 40.576 21.585 40.872 23.383 40.872 C 26.137 40.872 28.27 40.04 29.782 38.376 C 31.293 36.712 32.049 34.206 32.049 30.858 C 32.049 28.582 31.704 26.798 31.016 25.506 C 30.327 24.215 29.404 23.297 28.247 22.752 C 27.089 22.207 25.812 21.934 24.416 21.934 C 23.115 21.934 22.005 22.049 21.087 22.278 C 20.169 22.508 19.088 22.833 17.845 23.254 L 14.631 23.254 L 14.631 4 L 34.574 4 Z"
                    id="object-0"
                />
            </Icon>
        </Wrapper>
    )
}

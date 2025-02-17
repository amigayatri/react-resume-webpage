import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const EmptyIcon = (props: SVGProps) => {
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
                    d="M 23.974 37.897 C 22.06 37.897 20.26 37.538 18.577 36.821 C 16.893 36.103 15.41 35.103 14.128 33.821 C 12.846 32.538 11.846 31.056 11.128 29.372 C 10.41 27.688 10.051 25.88 10.051 23.949 C 10.051 22.017 10.41 20.209 11.128 18.526 C 11.846 16.842 12.846 15.359 14.128 14.077 C 15.41 12.795 16.893 11.795 18.577 11.077 C 20.26 10.359 22.06 10 23.974 10 C 25.906 10 27.718 10.359 29.41 11.077 C 31.102 11.795 32.589 12.795 33.872 14.077 C 35.154 15.359 36.154 16.842 36.872 18.526 C 37.589 20.209 37.948 22.017 37.948 23.949 C 37.948 25.88 37.589 27.688 36.872 29.372 C 36.154 31.056 35.154 32.538 33.872 33.821 C 32.589 35.103 31.102 36.103 29.41 36.821 C 27.718 37.538 25.906 37.897 23.974 37.897 Z M 24 35.026 C 25.914 35.026 27.654 34.526 29.218 33.526 C 30.782 32.526 32.034 31.184 32.974 29.5 C 33.914 27.816 34.384 25.957 34.384 23.923 C 34.384 21.889 33.944 20.034 33.064 18.359 C 32.183 16.684 30.966 15.346 29.41 14.346 C 27.854 13.346 26.051 12.846 24 12.846 C 21.966 12.846 20.171 13.346 18.615 14.346 C 17.06 15.346 15.842 16.684 14.961 18.359 C 14.081 20.034 13.641 21.889 13.641 23.923 C 13.641 25.957 14.081 27.816 14.961 29.5 C 15.842 31.184 17.06 32.526 18.615 33.526 C 20.171 34.526 21.966 35.026 24 35.026 Z M 28.795 4 L 31.718 4.846 L 29.589 11.487 L 29.025 13.308 L 21.897 35.667 L 21.487 37 L 19.256 44 L 16.359 43.128 L 18.589 36.128 L 19.077 34.615 L 26.205 12.179 L 26.666 10.692 L 28.795 4 Z"
                />
            </Icon>
        </Wrapper>
    )
}

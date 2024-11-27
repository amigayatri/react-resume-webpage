import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const ZeroIcon = (props: SVGProps) => {
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
                    d="M 14 4 C 18.057 4 21.129 5.717 23.214 9.152 C 25.299 12.587 26.342 17.532 26.342 23.986 C 26.342 30.459 25.299 35.413 23.214 38.848 C 21.129 42.283 18.057 44 14 44 C 9.961 44 6.894 42.283 4.799 38.848 C 2.704 35.413 1.657 30.459 1.657 23.986 C 1.657 17.532 2.704 12.587 4.799 9.152 C 6.894 5.717 9.961 4 14 4 Z M 14 7.057 C 11.49 7.057 9.475 8.383 7.956 11.035 C 6.436 13.686 5.677 18.003 5.677 23.986 C 5.677 26.911 5.847 29.44 6.186 31.573 C 6.526 33.705 7.04 35.46 7.729 36.838 C 8.418 38.216 9.286 39.239 10.334 39.909 C 11.381 40.579 12.603 40.914 14 40.914 C 15.698 40.914 17.175 40.329 18.43 39.159 C 19.685 37.989 20.652 36.154 21.331 33.653 C 22.011 31.153 22.351 27.93 22.351 23.986 C 22.351 20.079 22.053 16.876 21.459 14.375 C 20.864 11.875 19.949 10.03 18.713 8.841 C 17.477 7.652 15.906 7.057 14 7.057 Z M 20.142 8.473 L 21.077 12.408 L 8.111 38.565 L 6.583 35.451 L 20.142 8.473 Z"
                />
            </Icon>
        </Wrapper>
    )
}

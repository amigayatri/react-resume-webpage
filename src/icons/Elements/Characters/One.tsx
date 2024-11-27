import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const OneIcon = (props: SVGProps) => {
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
                    d="M 17.071 4 L 17.071 42.836 L 13.374 42.836 L 13.374 8.163 L 3.912 13.869 L 2.311 11.22 L 13.927 4 L 17.071 4 Z M 25.688 40.885 L 25.688 44 L 3.475 44 L 3.475 40.885 L 25.688 40.885 Z"
                    id="object-0"
                />
            </Icon>
        </Wrapper>
    )
}

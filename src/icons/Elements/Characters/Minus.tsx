import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const MinusIcon = (props: SVGProps) => {
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
                viewBox="-10 0 48 48"
            >
                <title>{alt}</title>
                <path
                    fill={color}
                    d="M -6 26.967 L -6 21.033 L 34 21.033 L 34 26.967 L -6 26.967 Z"
                />
            </Icon>
        </IconWrapper>
    )
}

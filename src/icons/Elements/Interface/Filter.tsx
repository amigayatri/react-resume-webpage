import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const FilterIcon = (props: SVGProps) => {
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
                viewBox="0 0 24 24"
            >
                <title>{alt}</title>
                <path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z"></path>
            </Icon>
        </IconWrapper>
    )
}

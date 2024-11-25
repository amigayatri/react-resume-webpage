import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const EqualIcon = (props: SVGProps) => {
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
                viewBox="0 0 48 48"
            >
                <title>{alt}</title>
                <path
                    fill={color}
                    d="M 44 10.946 L 44 17.163 L 4 17.163 L 4 10.946 L 44 10.946 Z M 44 30.784 L 44 37.054 L 4 37.054 L 4 30.784 L 44 30.784 Z"
                />
            </Icon>
        </IconWrapper>
    )
}

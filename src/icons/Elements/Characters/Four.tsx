import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const FourIcon = (props: SVGProps) => {
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
                    d="M 13.109 4 L 16.038 5.378 L 5.184 31.021 L 26.663 31.021 L 26.663 34.007 L 1.336 34.007 L 1.336 31.251 L 13.109 4 Z M 21.207 19.334 L 21.207 44 L 17.761 44 L 17.761 31.94 L 18.278 19.334 L 21.207 19.334 Z"
                    id="object-0"
                />
            </Icon>
        </IconWrapper>
    )
}

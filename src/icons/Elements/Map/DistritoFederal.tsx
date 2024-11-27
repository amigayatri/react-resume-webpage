import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const DistritoFederalIcon = (props: SVGProps) => {
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
                viewBox="0 0 128 128"
            >
                <title>{alt}</title>
                <path d="M 104.152 106.391 C 110.756 103.788 115.067 90.737 116.941 75.664 C 117.168 73.847 117.356 72.011 117.51 70.148 C 118.78 54.758 117.604 38.347 113.709 29.177 C 105.259 9.692 18.481 29.177 18.481 29.177 C 18.481 29.177 12.051 73.852 10.03 84.154 C 8.436 92.959 70.322 107.591 95.604 107.482 C 99.371 107.467 102.343 107.129 104.152 106.391 Z" />
            </Icon>
        </Wrapper>
    )
}

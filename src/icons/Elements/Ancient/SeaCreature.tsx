import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const SeaCreatureIcon = (props: SVGProps) => {
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
                viewBox="0 0 512 512"
            >
                <title>{alt}</title>
                <path d="M0 0h512v512H0z" fill="none" fillOpacity="1"></path>
                <g transform="translate(0,0)">
                    <path
                        d="M421.064 120.467c-8.182-.15-16.182 1.82-24.797 5.484-16.37 7-29 34.22-36.61 56.13-12.188 41.125-18.54 174.724-38.79 209.46h71.64c2.74-26.73 2.38-147.44 3.93-171.83.93-14.65 7.38-37.13 17.05-41.24 6.21-2.64 14.69-4.3 38 13.78 8.17 6.29 61.02-13.88 23.94-44.76-22.463-18.716-38.743-26.735-54.363-27.023zm20.006 18.027a9 9 0 1 1 0 18 9 9 0 0 1 0-18zM216.047 321.12c-55 0-77 69.35-77 69.35.013.335.043.67.09 1h148.61c.04-.31.08-.66.08-1 0-5.82-24.25-69.35-71.78-69.35zm-153.03 29.322c-21.82 0-39.5 41.068-39.5 41.068h79c.04-4.76-17.65-41.068-39.5-41.068z"
                        fillOpacity="1"
                    ></path>
                </g>
            </Icon>
        </Wrapper>
    )
}

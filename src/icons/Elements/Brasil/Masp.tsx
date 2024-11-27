import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const MaspIcon = (props: SVGProps) => {
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
                viewBox="0 0 90 90"
            >
                <title>{alt}</title>
                <g transform="matrix(1, 0, 0, 1, -0.509001, 3.666502)">
                    <polygon points="41.052,23.955 36.621,25.364 36.621,47.606 41.052,47.18 " />
                    <polygon points="41.856,23.955 83.638,41.721 83.638,52.896 41.856,47.185 " />
                    <polygon points="35.816,24.783 41.544,22.958 81.393,39.992 81.393,38.846 30.142,16.61 30.142,60.874 35.816,60.874 35.784,52.53   56.688,54.152 81.989,53.487 41.455,47.951 35.819,48.527 " />
                    <polygon points="29.265,16.577 26.621,17.523 26.621,49.415 18.127,50.253 18.127,29.92 24.561,28.165 12.778,23.338 12.778,60.874   18.127,60.874 18.126,51.23 26.621,51.873 26.621,60.874 29.265,60.874 " />
                    <polygon points="11.9,23.336 9.829,24.167 9.829,60.874 11.9,60.874 " />
                    <polygon points="25.812,28.571 18.933,30.527 18.933,49.369 25.812,48.697 " />
                    <polygon points="77.694,54.402 79.049,54.366 79.049,60.874 77.694,60.874 " />
                    <polygon points="79.664,54.35 81.599,54.299 81.599,60.874 79.664,60.874 " />
                    <polygon points="68.068,54.656 66.341,54.702 66.341,60.874 68.068,60.874 " />
                    <polygon points="65.688,54.718 64.455,54.75 64.455,60.874 65.688,60.874 " />
                    <rect x="6.661" y="61.702" width="77.697" height="1.72" />
                    <rect x="2.018" y="64.372" width="86.982" height="1.718" />
                </g>
            </Icon>
        </Wrapper>
    )
}

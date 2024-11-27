import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const PlanaltoIcon = (props: SVGProps) => {
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
                viewBox="0 0 480 480"
            >
                <title>{alt}</title>
                <g transform="matrix(0.859565, 0, 0, 0.859565, 3.620036, 3.619603)">
                    <g>
                        <g>
                            <path d="M522.943,429.742H27.056c-4.418,0-8-3.582-8-8v-40.48c0-4.418,3.582-8,8-8h495.887c4.418,0,8,3.582,8,8v40.48     C530.943,426.16,527.361,429.742,522.943,429.742z M35.056,413.742h479.887v-24.48H35.056V413.742z" />
                        </g>
                        <g>
                            <path d="M442.703,389.262h-1.441c-37.495,0-68-30.505-68-68v-0.721c0-4.418,3.582-8,8-8h121.441c4.418,0,8,3.582,8,8v0.721     C510.703,358.757,480.198,389.262,442.703,389.262z M389.77,328.541c3.55,25.24,25.289,44.721,51.492,44.721h1.441     c26.203,0,47.942-19.48,51.492-44.721H389.77z" />
                        </g>
                        <g>
                            <path d="M168.738,389.262H47.297c-4.418,0-8-3.582-8-8v-0.721c0-37.495,30.505-68,68-68h1.441c37.495,0,68,30.505,68,68v0.721     C176.738,385.68,173.157,389.262,168.738,389.262z M55.805,373.262H160.23c-3.55-25.24-25.289-44.721-51.492-44.721h-1.441     C81.093,328.541,59.354,348.021,55.805,373.262z" />
                        </g>
                        <g>
                            <path d="M249.7,389.262h-40.48c-4.418,0-8-3.582-8-8V128.258c0-4.418,3.582-8,8-8h40.48c4.418,0,8,3.582,8,8v253.004     C257.7,385.68,254.118,389.262,249.7,389.262z M217.219,373.262h24.48V136.258h-24.48V373.262z" />
                        </g>
                        <g>
                            <path d="M340.781,389.262h-40.48c-4.418,0-8-3.582-8-8V128.258c0-4.418,3.582-8,8-8h40.48c4.418,0,8,3.582,8,8v253.004     C348.781,385.68,345.199,389.262,340.781,389.262z M308.301,373.262h24.48V136.258h-24.48V373.262z" />
                        </g>
                        <g>
                            <path d="M300.301,247.58H249.7c-4.418,0-8-3.582-8-8v-40.48c0-4.418,3.582-8,8-8h50.601c4.418,0,8,3.582,8,8v40.48     C308.301,243.998,304.719,247.58,300.301,247.58z M257.7,231.58h34.601v-24.48H257.7V231.58z" />
                        </g>
                    </g>
                </g>
            </Icon>
        </Wrapper>
    )
}

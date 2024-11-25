import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const HavaianaIcon = (props: SVGProps) => {
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
                <path d="M 6.416 19.932 C 6.416 20.487 7.016 20.833 7.496 20.556 C 7.719 20.427 7.856 20.19 7.856 19.932 C 7.856 19.378 7.256 19.032 6.776 19.309 C 6.553 19.437 6.416 19.675 6.416 19.932 Z" />
                <path d="M 16.156 19.932 C 16.156 20.487 16.756 20.833 17.236 20.556 C 17.459 20.427 17.596 20.19 17.596 19.932 C 17.596 19.378 16.996 19.032 16.516 19.309 C 16.293 19.437 16.156 19.675 16.156 19.932 Z" />
                <g transform="matrix(1, 0, 0, 1, 0.156067, -0.497606)">
                    <path d="M8.27,2C4.41,2.32,1.7,4.36,3.41,13.4a28.23,28.23,0,0,1,.53,4.85C4,20.62,4.48,23,7.21,23c3.34,0,3.37-4,3.24-6.12a9.77,9.77,0,0,0-.2-1.41c-.24-1.15-.6-3.87.12-5.47C11.31,7.92,10.7,1.8,8.27,2ZM7,21.82,5,20.41,7,19l2,1.41Zm1.06-7.19-.17.27c-.31.48-1.09.18-.78-.3l.17-.27C10.88,8.67,7,6.13,6.87,6l-.24-.16A4.55,4.55,0,0,0,5.07,7.48c-.81,1.41-.91,3.29-.29,5.59a.39.39,0,0,1-.26.46h-.1a.36.36,0,0,1-.36-.28c-.68-2.5-.56-4.57.37-6.17a5.29,5.29,0,0,1,3-2.41A.38.38,0,0,1,7.88,5a.38.38,0,0,1-.27.46l-.31.11.09.06C7.58,5.7,12,8.52,8.06,14.63Z" />
                    <path d="M15.41,2c-2.43-.2-3,5.92-2.1,8,.72,1.6.36,4.32.12,5.47a9.77,9.77,0,0,0-.2,1.41C13.1,19,13.13,23,16.46,23c2.74,0,3.26-2.38,3.28-4.75a27.27,27.27,0,0,1,.53-4.85C22,4.36,19.27,2.32,15.41,2Zm1.27,19.82-2-1.41,2-1.41,2,1.41Zm2.69-8.17a.38.38,0,0,1-.34.22.41.41,0,0,1-.16,0,.37.37,0,0,1-.18-.5c1-2.13,1.2-4,.61-5.48A4.6,4.6,0,0,0,17.89,6l-.29.12c-.19.08-4.61,2-1.75,8.14l.13.29c.25.53-.61.71-.86.18L15,14.4c-3.09-6.63,1.93-8.76,2.14-8.85l.11,0-.3-.15a.38.38,0,0,1,.28-.7A5.48,5.48,0,0,1,20,7.57C20.66,9.28,20.45,11.32,19.37,13.65Z" />
                </g>
            </Icon>
        </IconWrapper>
    )
}

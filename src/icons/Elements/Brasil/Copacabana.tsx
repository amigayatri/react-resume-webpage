import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const CopacabanaIcon = (props: SVGProps) => {
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
                <g transform="matrix(1, 0, 0, 1, -60.490003, -60.328504)">
                    <path d="M 60.932 173.16 C 78.528 173.16 92.791 158.347 92.791 140.076 C 92.791 134.46 94.143 129.173 96.52 124.54 C 101.878 114.099 112.464 106.992 124.65 106.992 C 136.838 106.992 147.423 114.099 152.78 124.54 C 155.16 129.173 156.51 134.461 156.51 140.076 C 156.51 158.348 170.772 173.16 188.369 173.16 C 188.41 173.16 188.448 173.157 188.49 173.157 L 188.49 142.084 C 188.449 142.084 188.411 142.087 188.369 142.087 C 176.183 142.087 165.599 134.978 160.241 124.539 C 157.863 119.906 156.511 114.618 156.511 109.003 C 156.511 90.731 142.249 75.918 124.651 75.918 C 107.055 75.918 92.791 90.732 92.791 109.003 C 92.791 114.619 91.439 119.905 89.062 124.539 C 83.704 134.979 73.12 142.087 60.932 142.087 C 60.919 142.087 60.907 142.085 60.894 142.085 L 60.894 173.157 C 60.907 173.158 60.92 173.159 60.932 173.159 L 60.932 173.16 Z" />
                    <path d="M 124.338 170.643 C 136.543 170.643 147.142 177.762 152.508 188.218 L 159.977 188.218 C 157.597 183.579 156.242 178.284 156.242 172.659 C 156.242 154.362 141.959 139.529 124.338 139.529 C 106.715 139.529 92.435 154.362 92.435 172.658 C 92.435 178.282 91.08 183.578 88.7 188.216 L 96.171 188.216 C 101.535 177.763 112.134 170.645 124.338 170.645 L 124.338 170.643 Z" />
                    <path d="M 152.509 60.441 C 154.889 65.081 156.243 70.376 156.243 76 C 156.243 94.298 170.526 109.129 188.145 109.129 C 188.186 109.129 188.225 109.128 188.266 109.128 L 188.266 78.01 C 188.225 78.01 188.186 78.013 188.145 78.013 C 175.941 78.013 165.342 70.893 159.978 60.439 L 152.509 60.441 Z" />
                    <path d="M 92.434 75.998 C 92.434 70.374 93.788 65.079 96.168 60.439 L 88.697 60.439 C 83.331 70.892 72.734 78.013 60.53 78.013 C 60.517 78.013 60.503 78.012 60.49 78.012 L 60.49 109.126 L 60.53 109.126 C 78.151 109.128 92.435 94.297 92.435 75.998 L 92.434 75.998 Z" />
                </g>
            </Icon>
        </Wrapper>
    )
}

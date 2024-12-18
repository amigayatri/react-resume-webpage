import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const ApoteoseIcon = (props: SVGProps) => {
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
                viewBox="0 0 100 100"
            >
                <title>{alt}</title>
                <path d="M 96.47 84.702 C 87.153 38.786 70.65 13.5 50 13.5 C 29.35 13.5 12.847 38.786 3.53 84.702 C 3.441 85.142 3.554 85.6 3.839 85.949 C 4.124 86.298 4.55 86.5 5 86.5 L 10 86.5 C 10.68 86.5 11.275 86.043 11.45 85.386 C 17.139 64.01 25.666 35.591 34 35.591 C 39.999 35.591 46.196 47.783 46.486 68.273 L 32.5 68.273 C 31.826 68.273 31.234 68.723 31.054 69.373 C 30.874 70.022 31.15 70.713 31.728 71.06 L 39.964 76 L 25 76 C 24.171 76 23.5 76.672 23.5 77.5 L 23.5 85 C 23.5 85.828 24.171 86.5 25 86.5 L 75 86.5 C 75.828 86.5 76.5 85.828 76.5 85 L 76.5 77.5 C 76.5 76.672 75.828 76 75 76 L 60.036 76 L 68.272 71.059 C 68.85 70.712 69.126 70.022 68.946 69.372 C 68.766 68.723 68.175 68.272 67.501 68.272 L 53.514 68.272 C 53.804 47.782 60.001 35.59 66 35.59 C 74.334 35.59 82.861 64.009 88.551 85.385 C 88.726 86.043 89.32 86.5 90 86.5 L 95 86.5 C 95.45 86.5 95.876 86.298 96.161 85.949 C 96.446 85.6 96.56 85.143 96.47 84.702 Z M 73.5 83.5 L 26.5 83.5 L 26.5 79 L 73.5 79 L 73.5 83.5 Z M 54.585 75.772 L 45.416 75.772 L 37.916 71.272 L 62.085 71.272 L 54.585 75.772 Z M 91.152 83.5 C 81.344 46.89 74.267 32.591 66 32.591 C 57.229 32.591 50.806 47.507 50.511 68.273 L 49.49 68.273 C 49.194 47.507 42.771 32.591 34 32.591 C 25.733 32.591 18.656 46.89 8.848 83.5 L 6.841 83.5 C 15.779 40.89 31.466 16.5 50 16.5 C 68.534 16.5 84.22 40.89 93.159 83.5 L 91.152 83.5 Z M 21.5 85 C 21.5 85.83 20.83 86.5 20 86.5 C 19.17 86.5 18.5 85.83 18.5 85 C 18.5 84.17 19.17 83.5 20 83.5 C 20.83 83.5 21.5 84.17 21.5 85 Z M 16.5 85 C 16.5 85.83 15.83 86.5 15 86.5 C 14.17 86.5 13.5 85.83 13.5 85 C 13.5 84.17 14.17 83.5 15 83.5 C 15.83 83.5 16.5 84.17 16.5 85 Z M 86.5 85 C 86.5 85.83 85.83 86.5 85 86.5 C 84.17 86.5 83.5 85.83 83.5 85 C 83.5 84.17 84.17 83.5 85 83.5 C 85.83 83.5 86.5 84.17 86.5 85 Z M 81.5 85 C 81.5 85.83 80.83 86.5 80 86.5 C 79.17 86.5 78.5 85.83 78.5 85 C 78.5 84.17 79.17 83.5 80 83.5 C 80.83 83.5 81.5 84.17 81.5 85 Z" />
            </Icon>
        </Wrapper>
    )
}

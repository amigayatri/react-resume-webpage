import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const EspiritoSantoIcon = (props: SVGProps) => {
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
                <path d="M 82.855 11.53 C 78.216 10.478 73.192 10.106 68.772 10.021 C 66.341 9.974 64.092 10.013 62.193 10.074 C 62 10.319 61.851 10.563 61.726 10.804 C 61.593 11.061 61.501 11.316 61.445 11.568 C 61.37 11.904 61.367 12.237 61.426 12.564 C 61.646 13.784 62.772 14.944 64.802 16.05 C 63.499 15.676 62.356 15.423 61.311 15.242 C 43.042 12.08 62.436 36.865 58.819 38.597 C 55.896 37.833 52.987 37.748 50.076 38.445 C 50.292 39.595 57.148 46.712 58.986 49.338 C 59.103 49.504 59.202 49.656 59.276 49.783 C 60.64 52.188 59.796 55.706 58.214 59.294 C 56.063 64.178 52.541 69.195 51.302 71.717 C 45.471 82.98 45.02 80.219 34.671 84.287 C 28.682 86.737 32.439 96.401 29.517 101.996 C 34.837 102.507 34.62 106.859 34.388 110.7 C 34.338 111.519 34.287 112.315 34.29 113.046 C 35.815 113.725 37.356 114.312 38.909 114.854 C 40.118 115.276 41.339 115.654 42.57 115.988 C 44.207 116.433 45.859 116.826 47.548 117.108 C 47.676 117.124 47.787 117.141 47.911 117.157 C 49.799 117.402 51.399 117.646 52.782 117.811 C 58.303 118.469 60.363 117.771 63.265 109.906 C 65.711 103.307 82.97 96.256 80.213 87.048 C 80.129 87.048 95.927 63.594 96.537 61.981 C 100.764 51.554 96.537 39.672 98.152 28.936 C 98.719 25.175 98.092 22.159 96.652 19.727 C 94.054 15.338 88.776 12.873 82.855 11.53 Z" />
            </Icon>
        </Wrapper>
    )
}

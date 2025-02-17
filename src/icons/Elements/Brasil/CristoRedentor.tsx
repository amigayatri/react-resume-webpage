import { ToggleIconWrapper, IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const CristoRedentorIcon = (props: SVGProps) => {
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
                viewBox="0 0 64 64"
            >
                <title>{alt}</title>
                <g>
                    <path d="M28,31h6c0.334,0,0.668-0.022,1-0.059v-2.026C34.67,28.963,34.338,29,34,29h-6c-3.519,0-6.432-2.614-6.92-6h-2.021   C19.558,27.493,23.376,31,28,31z" />
                    <path d="M35,53h2v-7.325c-0.63-0.168-1.301-0.323-2-0.469V53z" />
                    <path d="M36,12c0-0.552-0.449-1-1-1h-6c-0.551,0-1,0.448-1,1v2c0,2.206,1.794,4,4,4s4-1.794,4-4V12z" />
                    <rect x="21" y="55" width="2" height="2" />
                    <path d="M28,27h6c0.34,0,0.672-0.044,1-0.111V23c0-0.061,0.014-0.118,0.018-0.179C33.847,22.412,33,21.309,33,20v-0.09   C32.674,19.965,32.341,20,32,20s-0.674-0.035-1-0.09V20c0,1.654-1.346,3-3,3h-4.899C23.566,25.279,25.586,27,28,27z" />
                    <path d="M10,37c-0.884,0-1.716,0.471-2.171,1.229L3.766,45h12.468l-4.063-6.771C11.716,37.471,10.884,37,10,37z" />
                    <path d="M14,27h4.214c-0.626-1.221-1.034-2.57-1.164-4H11v1C11,25.654,12.346,27,14,27z" />
                    <path d="M9,24v-1H5v2h4.101C9.035,24.677,9,24.342,9,24z" />
                    <path d="M59,23h-4v1c0,0.342-0.035,0.677-0.101,1H59V23z" />
                    <path d="M29,20v-0.812c-1.79-1.039-3-2.973-3-5.188v-2c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v2c0,2.215-1.21,4.149-3,5.188V20   c0,0.485,0.353,0.871,0.812,0.962C36.36,20.374,37.135,20,38,20h1V10c0-3.859-3.14-7-7-7s-7,3.141-7,7v11h3   C28.551,21,29,20.552,29,20z" />
                    <path d="M25,43.238c-0.759-0.215-1.432-0.455-2-0.73V53h2V43.238z" />
                    <rect x="25" y="55" width="6" height="2" />
                    <path d="M53,24v-1h-8v4h5C51.654,27,53,25.654,53,24z" />
                    <path d="M27,43.725V53h2v-8.887C28.303,43.987,27.634,43.859,27,43.725z" />
                    <path d="M33,44.819c-0.663-0.121-1.334-0.237-2-0.353V53h2V44.819z" />
                    <rect x="33" y="55" width="6" height="2" />
                    <path d="M36.496,43.487C35.551,42.664,35,41.471,35,40.197V32.95C34.668,32.98,34.334,33,34,33h-6c-1.801,0-3.498-0.444-5-1.214V40   c0,1.047,5.423,1.988,8.336,2.494C33.086,42.798,34.874,43.109,36.496,43.487z" />
                    <path d="M21,35.212C20.685,35.076,20.348,35,20,35c-0.884,0-1.716,0.471-2.171,1.229L15.566,40l3,5H21V35.212z" />
                    <rect x="39" y="49" width="2" height="4" />
                    <path d="M42,22h-4c-0.551,0-1,0.448-1,1v17.197c0,0.794,0.395,1.53,1.055,1.971C39.273,42.98,40,44.339,40,45.803V47h3V23   C43,22.448,42.551,22,42,22z M41,34h-2v-2h2V34z M41,30h-2v-2h2V30z M41,26h-2v-2h2V26z" />
                    <rect x="41" y="55" width="2" height="2" />
                    <path d="M46.174,36.229c-0.275-0.458-0.695-0.793-1.174-1.001V45h0.436l3-5L46.174,36.229z" />
                    <path d="M56.174,38.229C55.718,37.471,54.886,37,54.002,37s-1.716,0.471-2.171,1.229L47.768,45h12.468L56.174,38.229z" />
                    <rect x="37" y="59" width="6" height="2" />
                    <rect x="21" y="59" width="6" height="2" />
                    <rect x="29" y="59" width="6" height="2" />
                    <rect x="56" y="51" width="5" height="2" />
                    <rect x="59" y="55" width="2" height="2" />
                    <rect x="49" y="59" width="5" height="2" />
                    <rect x="49" y="55" width="2" height="2" />
                    <rect x="56" y="59" width="5" height="2" />
                    <rect x="53" y="55" width="4" height="2" />
                    <rect x="49" y="51" width="5" height="2" />
                    <rect x="3" y="59" width="5" height="2" />
                    <rect x="13" y="55" width="2" height="2" />
                    <rect x="10" y="59" width="5" height="2" />
                    <rect x="10" y="51" width="5" height="2" />
                    <rect x="3" y="51" width="5" height="2" />
                    <rect x="3" y="55" width="2" height="2" />
                    <rect x="7" y="55" width="4" height="2" />
                </g>
            </Icon>
        </Wrapper>
    )
}

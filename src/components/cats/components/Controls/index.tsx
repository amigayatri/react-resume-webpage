import { SVGIcon } from "../../../common/client"
import { ControlsProps } from "../types.ts"
import { Control, ControlButton, ControlsWrapper, ValueWrapper } from "./Controls.styled.ts"

export const Controls = ({ t, lng, controls, handleChange }: ControlsProps) => {
    const { size, hideEmpty, count } = controls

    return (
        <ControlsWrapper>
            <Control>
                <ControlButton
                    aria-label={t("count.decrease")}
                    $isDisabled={count === 1}
                    onClick={() => {
                        if (count === 1) return
                        handleChange(hideEmpty, count - 1, size)
                    }}
                >
                    <SVGIcon lng={lng} local="cats" size={48} id="minus" />
                </ControlButton>
                <ControlButton
                    aria-label={t("count.increase")}
                    $isDisabled={count === 8}
                    onClick={() => {
                        if (count === 8) return
                        handleChange(hideEmpty, count + 1, size)
                    }}
                >
                    <SVGIcon lng={lng} local="cats" size={48} id="plus" />
                </ControlButton>
            </Control>
            <Control>
                <ControlButton aria-label={t("size.decrease")} onClick={() => handleChange(hideEmpty, count, size - 8)}>
                    <SVGIcon lng={lng} local="cats" size={48} id="zoomout" />
                </ControlButton>
                <ValueWrapper>{controls.size}px</ValueWrapper>
                <ControlButton aria-label={t("size.increase")} onClick={() => handleChange(hideEmpty, count, size + 8)}>
                    <SVGIcon lng={lng} local="cats" size={48} id="zoomin" />
                </ControlButton>
            </Control>
            <Control>
                <ControlButton
                    aria-label={t("empty.hide")}
                    $isDisabled={hideEmpty === true}
                    onClick={() => handleChange(!hideEmpty, count, size)}
                >
                    <SVGIcon lng={lng} local="cats" size={48} id="eyeclose" />
                </ControlButton>
                <ValueWrapper>
                    <SVGIcon lng={lng} local="cats" size={48} id="empty" />
                </ValueWrapper>
                <ControlButton
                    aria-label={t("empty.show")}
                    $isDisabled={hideEmpty === false}
                    onClick={() => handleChange(!hideEmpty, count, size)}
                >
                    <SVGIcon lng={lng} local="cats" size={48} id="eyeopen" />
                </ControlButton>
            </Control>
        </ControlsWrapper>
    )
}

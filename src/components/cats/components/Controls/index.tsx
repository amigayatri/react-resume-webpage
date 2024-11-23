import {
	ValueWrapper,
	ControlsWrapper,
	Control,
	ControlButton
} from "./Controls.styled.ts"
import { SVGIcon } from "../../../common/client"
import { ControlsProps } from "../types.ts"

export const Controls = ({ t, lng, controls, setControls }: ControlsProps) => {
	const { size, hideEmpty, count } = controls
	const handleSize = (add: boolean) => {
		const newControls = { size, count, hideEmpty }
		newControls.size += add ? 8 : -8
		setControls(newControls)
	}
	const handleHide = () => {
		const newControls = { size, count, hideEmpty: !hideEmpty }
		setControls(newControls)
	}
	const handleCount = (add: boolean) => {
		if ((count === 8 && add) || (count === 1 && !add)) return
		const newControls = { size, count, hideEmpty }
		newControls.count += add ? 1 : -1
		setControls(newControls)
	}
	return (
		<ControlsWrapper>
			<Control>
				<ControlButton
					aria-label={t("count.decrease")}
					$isDisabled={count === 1}
					onClick={() => {
						if (count === 1) return
						handleCount(false)
					}}
				>
					<SVGIcon lng={lng} local="cats" size={48} id="minus" />
				</ControlButton>
				<ControlButton
					aria-label={t("count.increase")}
					$isDisabled={count === 8}
					onClick={() => {
						if (count === 8) return
						handleCount(true)
					}}
				>
					<SVGIcon lng={lng} local="cats" size={48} id="plus" />
				</ControlButton>
			</Control>
			<Control>
				<ControlButton
					aria-label={t("size.decrease")}
					onClick={() => {
						handleSize(false)
					}}
				>
					<SVGIcon lng={lng} local="cats" size={48} id="zoomout" />
				</ControlButton>
				<ValueWrapper>{controls.size}px</ValueWrapper>
				<ControlButton
					aria-label={t("size.increase")}
					onClick={() => {
						handleSize(true)
					}}
				>
					<SVGIcon lng={lng} local="cats" size={48} id="zoomin" />
				</ControlButton>
			</Control>
			<Control>
				<ControlButton
					aria-label={t("empty.hide")}
					$isDisabled={hideEmpty === true}
					onClick={() => handleHide()}
				>
					<SVGIcon lng={lng} local="cats" size={48} id="eyeclose" />
				</ControlButton>
				<ValueWrapper>
					<SVGIcon lng={lng} local="cats" size={48} id="empty" />
				</ValueWrapper>
				<ControlButton
					aria-label={t("empty.show")}
					$isDisabled={hideEmpty === false}
					onClick={() => handleHide()}
				>
					<SVGIcon lng={lng} local="cats" size={48} id="eyeopen" />
				</ControlButton>
			</Control>
		</ControlsWrapper>
	)
}

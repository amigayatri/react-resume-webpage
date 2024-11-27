import { SVGIcon } from "../../../../../common/client"
import { SizeProps } from "../types"
import { SizeWrapper, SizeButton, SizeLabel } from "./Size.styled"

const minSize = 24,
	maxSize = 320

export const Size = ({ size, handleSize, lng }: SizeProps) => {
	const handleSizeChange = (isToAdd: boolean) => {
		if (isToAdd) {
			if (size === maxSize) return
			handleSize(size + 4)
		} else {
			if (size === minSize) return
			handleSize(size - 4)
		}
	}
	return (
		<SizeWrapper>
			<SizeButton
				tabIndex={0}
				role="button"
				className="minus"
				style={size === minSize ? { cursor: "not-allowed" } : {}}
				onClick={() => handleSizeChange(false)}
			>
				<SVGIcon lng={lng} local="icon-control" id="minus" size={24} />
			</SizeButton>
			<SizeLabel>{size}px</SizeLabel>
			<SizeButton
				tabIndex={0}
				role="button"
				className="plus"
				style={size === maxSize ? { cursor: "not-allowed" } : {}}
				onClick={() => handleSizeChange(true)}
			>
				<SVGIcon lng={lng} local="icon-control" id="plus" size={24} />
			</SizeButton>
		</SizeWrapper>
	)
}

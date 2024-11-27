import { SVGIcon } from "../../../../../common/client"
import { SizeProps } from "../types"
import { SizeWrapper, SizeButton, SizeLabel } from "./Size.styled"

export const Size = ({ size, handleSize, lng }: SizeProps) => {
	const handleSizeChange = (isToAdd: boolean) => {
		if (isToAdd) {
			if (size === 256) return
			handleSize(size + 4)
		} else {
			if (size === 16) return
			handleSize(size - 4)
		}
	}
	return (
		<SizeWrapper>
			<SizeButton
				tabIndex={0}
				role="button"
				className="minus"
				onClick={() => handleSizeChange(false)}
			>
				<SVGIcon lng={lng} local="icon-control" id="minus" size={24} />
			</SizeButton>
			<SizeLabel>{size}px</SizeLabel>
			<SizeButton
				tabIndex={0}
				role="button"
				className="plus"
				onClick={() => handleSizeChange(true)}
			>
				<SVGIcon lng={lng} local="icon-control" id="plus" size={24} />
			</SizeButton>
		</SizeWrapper>
	)
}

import { PaletteSelectBase } from "./PaletteSelectBase.tsx"
import { useTranslation } from "../../../i18n/"
import { ChangeEvent } from "react"
import { PaletteInfoProps } from "./../../../types/palette/"
import {
	SelectStyleProps,
	ElementProps,
	BaseElementProps
} from "../../../types/common/"

export interface PaletteSelectElementProps extends ElementProps {
	onSelect: (arg0: ChangeEvent<HTMLSelectElement>) => void
	local: string
	label: { palette: string; group?: string }
	fontSize: number
	addMultiple?: boolean
	defaultValue?: PaletteInfoProps
	showing?: Map<string, Set<string>>
	Button?: React.ReactElement
	customStyle?: SelectStyleProps
}

export interface PaletteSelectBaseElement extends PaletteSelectElementProps {}
export interface PaletteSelectBaseElement extends BaseElementProps {}

export interface PaletteSelectProps extends PaletteSelectElementProps {
	type: string
}

export interface PaletteSelectBaseProps extends PaletteSelectProps {}
export interface PaletteSelectBaseProps extends BaseElementProps {}

export const PaletteSelect = async (props: PaletteSelectProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "palette")
	return <PaletteSelectBase t={t} {...props} />
}

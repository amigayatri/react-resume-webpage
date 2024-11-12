import Element from "../../../types/common/ElementProps.ts"
import { PaletteSelectBase } from "./PaletteSelectBase.tsx"
import { useTranslation } from "../../../i18n/"
import { ChangeEvent } from "react"
import PaletteInfoProps from "./../../../types/palette/PaletteInfoProps"
import { TFunction } from "i18next"
import SelectStyle from "../../../types/common/SelectStyleProps.ts"

export interface PaletteSelectElementProps extends Element {
	onSelect: (arg0: ChangeEvent<HTMLSelectElement>) => void
	local: string
	label: { palette: string; group?: string }
	fontSize: number
	addMultiple?: boolean
	defaultValue?: PaletteInfoProps
	showing?: Map<string, Set<string>>
	Button?: React.ReactElement
	customStyle?: SelectStyle
}

export interface PaletteSelectBaseElement extends PaletteSelectElementProps {
	t: TFunction<any, undefined>
}

export interface PaletteSelectProps extends PaletteSelectElementProps {
	type: string
}

export interface PaletteSelectBaseProps extends PaletteSelectProps {
	t: TFunction<any, undefined>
}

export const PaletteSelect = async (props: PaletteSelectProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "palette")
	return <PaletteSelectBase t={t} {...props} />
}

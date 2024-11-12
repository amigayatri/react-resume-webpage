import { useTranslation } from "../../../i18n/"
import { SelectBase } from "./SelectBase.tsx"
import Element from "../../../types/common/ElementProps.ts"
import SelectStyle from "../../../types/common/SelectStyleProps.ts"

export interface OptionProps {
	value: string
	key: string
	tOptions?: { groupName: string }
}

export interface GroupProps {
	groupKey: string
	options: OptionProps[]
}

export interface SelectProps extends Element {
	options: GroupProps[]
	id: string
	iconId?: string
	local: string
	Button?: React.ReactElement
	label: string
	namespace: string
	fontSize: number
	onHeader: boolean
	defaultValue: string
	onSelectChange: (arg0: any) => void
	customStyle?: SelectStyle
}

export const Select = async (props: SelectProps) => {
	const { lng, namespace } = props
	const { t } = await useTranslation(lng, namespace)
	return <SelectBase t={t} {...props} />
}

import { useTranslation } from "../../../i18n/"
import { SelectBase } from "./SelectBase.tsx"
import Element from "../../../types/common/ElementProps.ts"
import SelectStyle from "../../../types/common/SelectStyleProps.ts"

interface OptionProps {
	value: string
	key: string
}

interface GroupProps {
	groupKey: string
	options: OptionProps[]
}

export interface SelectProps extends Element {
	options: GroupProps[]
	id: string
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

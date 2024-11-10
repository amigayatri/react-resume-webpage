import { useTranslation } from "../../../i18n/"
import { SelectBase } from "./SelectBase.tsx"
import Element from "../../../types/ElementProps.ts"

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
	labelKey: string
	namespace: string
	fontSize: number
	onHeader: boolean
	defaultValue: string
	onSelectChange: (arg0: any) => void
	customStyle?: {
		label: {
			bg: string
			text: string
		}
		select: {
			bg: string
			text: string
			border: string
		}
	}
}

export const Select = async (props: SelectProps) => {
	const { lng, namespace } = props
	const { i18n, t } = await useTranslation(lng, namespace)
	return <SelectBase t={t} i18n={i18n} {...props} />
}

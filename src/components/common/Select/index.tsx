import { useTranslation } from "../../../i18n/"
import { SelectBase } from "./SelectBase.tsx"
import { SelectProps, BaseElementProps } from "../../../types/common/"

export interface SelectBaseProps extends SelectProps {}
export interface SelectBaseProps extends BaseElementProps {}

export const Select = async (props: SelectProps) => {
	const { lng, namespace } = props
	const { t } = await useTranslation(lng, namespace)
	return <SelectBase t={t} {...props} />
}

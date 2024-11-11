import { useTranslation } from "../../../i18n/"
import { ToggleBase } from "./ToggleBase.tsx"
import { ToggleProps } from "../../../types/common/ToggleProps.ts"

export const Toggle = async (props: ToggleProps) => {
	const { t } = await useTranslation(props.lng, "common")
	return <ToggleBase t={t} {...props} />
}

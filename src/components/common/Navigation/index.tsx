import { useTranslation } from "../../../i18n/"
import { NavigationBase } from "./NavigationBase.tsx"
import { ElementProps } from "../../../types/common/"

export const Navigation = async ({ lng }: ElementProps) => {
	const { t } = await useTranslation(lng, "pagelist")
	return <NavigationBase t={t} lng={lng} />
}

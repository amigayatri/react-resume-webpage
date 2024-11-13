import { DescriptionBase } from "./DescriptionBase"
import { useTranslation } from "../../../i18n/"
import { DescriptionProps } from "../types"

export const Description = async ({ lng }: DescriptionProps) => {
	const { t } = await useTranslation(lng, "extra-languages")
	return <DescriptionBase t={t} lng={lng} />
}

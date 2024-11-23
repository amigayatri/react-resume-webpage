import { DetailedIconBase } from "./DetailedIconBase"
import { useTranslation } from "../../../../i18n/"
import { DetailedIconProps } from "../types"

export const DetailedIcon = async ({ lng, iconId }: DetailedIconProps) => {
	const { t } = await useTranslation(lng, "icons")
	return <DetailedIconBase t={t} lng={lng} iconId={iconId} />
}

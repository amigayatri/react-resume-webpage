import { IconAltBase } from "./IconAltBase"
import { useTranslation } from "../../../../../i18n/"
import { IconAltProps } from "../../types"

export const IconAlt = async ({ lng, iconId }: IconAltProps) => {
	const { t } = await useTranslation(lng, "icons")
	return <IconAltBase t={t} lng={lng} iconId={iconId} />
}

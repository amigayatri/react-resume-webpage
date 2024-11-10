import Element from "../../../types/ElementProps.ts"
import { useTranslation } from "../../../i18n/"
import { Description } from "../Description/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "extra-languages")
	return (
		<MainBase i18n={i18n} lng={lng}>
			<Description lng={lng} />
		</MainBase>
	)
}

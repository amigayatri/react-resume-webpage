import Element from "../../../types/ElementProps.ts"
import { useTranslation } from "../../../i18n/"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { AnimalList } from "../AnimalList/client.tsx"

export const Main = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "animals")
	return (
		<MainBase i18n={i18n} lng={lng}>
			<AnimalList lng={lng} />
		</MainBase>
	)
}

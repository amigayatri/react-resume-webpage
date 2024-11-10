import Element from "../../../types/ElementProps.ts"
import { MainBase } from "./MainBase.tsx"
import { useTranslation } from "../../../i18n/"
import { ReactElement } from "react"

export interface MainProps extends Element {
	children: (ReactElement | string)[] | ReactElement | string
}

export const Main = async ({ lng, children }: MainProps) => {
	const { i18n } = await useTranslation(lng, "home")
	return <MainBase children={children} i18n={i18n} lng={lng} />
}

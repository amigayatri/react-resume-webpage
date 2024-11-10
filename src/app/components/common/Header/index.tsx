import { useTranslation } from "../../../i18n/"
import { HeaderBase } from "./HeaderBase.tsx"
import Element from "../../../types/ElementProps.ts"

export interface HeaderProps extends Element {
	onError: boolean
	theme: string
	changeTheme: () => void
}

export const Header = async ({
	lng,
	theme,
	changeTheme,
	onError
}: HeaderProps) => {
	const { i18n, t } = await useTranslation(lng, "common")
	return (
		<HeaderBase
			t={t}
			i18n={i18n}
			lng={lng}
			theme={theme}
			changeTheme={changeTheme}
			onError={onError}
		/>
	)
}

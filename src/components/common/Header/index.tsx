import { useTranslation } from "../../../i18n/"
import { HeaderBase } from "./HeaderBase.tsx"
import Element from "../../../types/common/ElementProps.ts"

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
	const { t } = await useTranslation(lng, "header")
	return (
		<HeaderBase
			t={t}
			lng={lng}
			theme={theme}
			changeTheme={changeTheme}
			onError={onError}
		/>
	)
}

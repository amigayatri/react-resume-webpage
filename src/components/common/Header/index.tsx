import { useTranslation } from "../../../i18n/"
import { HeaderBase } from "./HeaderBase.tsx"
import { ElementProps, BaseElementProps } from "../../../types/common/"

export interface HeaderProps extends ElementProps {
	onError: boolean
	theme: string
	changeTheme: () => void
}

export interface HeaderBaseProps extends HeaderProps {}
export interface HeaderBaseProps extends BaseElementProps {}

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

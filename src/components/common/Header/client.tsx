"use client"

import { HeaderBase } from "./HeaderBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { HeaderProps } from "./index.tsx"

export function Header({ lng, theme, changeTheme, onError }: HeaderProps) {
	const { t } = useTranslation(lng, "common")
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

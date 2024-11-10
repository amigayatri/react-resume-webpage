"use client"

import { HeaderBase } from "./HeaderBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { HeaderProps } from "./index.tsx"

export function Header({ lng, theme, changeTheme, onError }: HeaderProps) {
	const { i18n, t } = useTranslation(lng, "common")
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

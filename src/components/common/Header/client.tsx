"use client"

import { HeaderBase } from "./HeaderBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { HeaderProps } from "."

export function Header({ lng, theme, changeTheme, onError }: HeaderProps) {
	const { t } = useTranslation(lng, "header")
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

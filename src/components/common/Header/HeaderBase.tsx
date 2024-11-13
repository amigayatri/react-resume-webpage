import { MenuWrapper, SettingsWrapper } from "./Header.styled.ts"
import { Toggle, LanguageSelect, Navigation } from "../client.tsx"
import { useRouter } from "next/navigation"
import { ChangeEvent } from "react"
import { HeaderBaseProps } from "."

export const HeaderBase = ({
	lng,
	t,
	theme,
	changeTheme,
	onError
}: HeaderBaseProps) => {
	const iconSettings = {
		id: "sun",
		trueValAsStr: "light",
		shouldChange: true,
		options: { true: "sun", false: "moon" }
	}
	const router = useRouter()

	const onLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const locale = e.target.value
		router.push(locale)
	}
	return (
		<MenuWrapper>
			<Navigation lng={lng} />
			<SettingsWrapper>
				<LanguageSelect
					onError={onError}
					isExtra={false}
					onLanguageChange={onLanguageChange}
					lng={lng}
				/>
				<Toggle
					lng={lng}
					icon={iconSettings}
					state={theme}
					stateChangeFN={changeTheme}
					ariaLabel={t("theme.change")}
				/>
			</SettingsWrapper>
		</MenuWrapper>
	)
}

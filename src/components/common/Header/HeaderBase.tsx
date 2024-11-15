import { MenuWrapper, SettingsWrapper } from "./Header.styled.ts"
import { Toggle, Navigation, LanguageSelect } from "../client.tsx"
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
	return (
		<MenuWrapper>
			<Navigation lng={lng} />
			<SettingsWrapper>
				<LanguageSelect onError={onError} isExtra={false} lng={lng} />
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

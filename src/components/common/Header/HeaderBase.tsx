import { MenuWrapper, SettingsWrapper } from "./Header.styled.ts"
import { Toggle, Navigation, LanguageSelect } from "../client.tsx"
import { HeaderBaseProps } from "."
import { toggleIconKey } from "../../../types/common"

const sunId: toggleIconKey = "sun"
const moonId: toggleIconKey = "moon"

export const HeaderBase = ({
	lng,
	t,
	theme,
	changeTheme,
	onError
}: HeaderBaseProps) => {
	const iconSettings = {
		id: sunId,
		trueValAsStr: "light",
		shouldChange: true,
		options: { true: sunId, false: moonId }
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
					alwaysDark
					label={t("theme.change")}
				/>
			</SettingsWrapper>
		</MenuWrapper>
	)
}

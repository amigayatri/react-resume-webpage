import { MenuWrapper, SettingsWrapper } from "./Header.styled.ts"
import { Toggle, Navigation, LanguageSelect } from "../client.tsx"
import { HeaderBaseProps } from "."
import { iconKey } from "../../../types/common"

const sunId: iconKey = "sun"
const moonId: iconKey = "moon"

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
					size={24}
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

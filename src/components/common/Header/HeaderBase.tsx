import BaseElement from "../../../types/common/BaseElementProps.ts"
import { TFunction } from "i18next"
import { MenuWrapper, SettingsWrapper } from "./Header.styled.ts"
import { Toggle } from "../Toggle/client.tsx"
import { LanguageSelect } from "../LanguageSelect/client.tsx"
import { Navigation } from "../Navigation/client.tsx"
import { useRouter } from "next/navigation"
import { ChangeEvent } from "react"

interface HeaderBaseProps extends BaseElement {
	t: TFunction<any, undefined>
	theme: string
	changeTheme: () => void
	onError: boolean
}

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
					ariaLabel={t("menu.theme.change")}
				/>
			</SettingsWrapper>
		</MenuWrapper>
	)
}

import { TFunction } from "i18next"
import BaseElement from "../../../types/BaseElementProps"
import { NavigationWrapper } from "./Navigation.styled"
import { DesktopNavigation } from "./components/DesktopNavigation"
import { MobileNavigation } from "./components/MobileNavigation"
import { usePathname } from "next/navigation"

interface NavigationBaseProps extends BaseElement {
	t: TFunction<any, undefined>
}

export interface NavProps extends NavigationBaseProps {
	path: string | null
}

export const NavigationBase = ({ lng, i18n, t }: NavigationBaseProps) => {
	const pathname = usePathname()
	if (pathname === `/${lng}`) return
	return (
		<NavigationWrapper>
			<DesktopNavigation path={pathname} t={t} lng={lng} i18n={i18n} />
			<MobileNavigation path={pathname} t={t} lng={lng} i18n={i18n} />
		</NavigationWrapper>
	)
}

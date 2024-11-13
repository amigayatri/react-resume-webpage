import { BaseElementProps } from "../../../types/common/"
import { NavigationWrapper } from "./Navigation.styled"
import { DesktopNavigation, MobileNavigation } from "./components"
import { usePathname } from "next/navigation"

export interface NavProps extends BaseElementProps {
	path: string | null
}

export const NavigationBase = ({ lng, t }: BaseElementProps) => {
	const pathname = usePathname()
	if (pathname === `/${lng}`) return
	return (
		<NavigationWrapper>
			<DesktopNavigation path={pathname} t={t} lng={lng} />
			<MobileNavigation path={pathname} t={t} lng={lng} />
		</NavigationWrapper>
	)
}

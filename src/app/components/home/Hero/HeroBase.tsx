import { HeroWrapper, Title, SubHeading } from "./Hero.styled.ts"
import BaseElement from "../../../types/BaseElementProps.ts"

export const HeroBase = ({ i18n, lng }: BaseElement) => {
	const t = i18n.getFixedT(lng, "home")

	return (
		<HeroWrapper>
			<Title>{t("hero.name")}</Title>
			<SubHeading>{t("hero.subheading")}</SubHeading>
		</HeroWrapper>
	)
}

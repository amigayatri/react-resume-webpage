import { HeroWrapper, Title, SubHeading } from "./Hero.styled.ts"
import BaseElement from "../../../types/common/BaseElementProps.ts"

export const HeroBase = ({ t }: BaseElement) => {
	return (
		<HeroWrapper>
			<Title>{t("hero.name")}</Title>
			<SubHeading>{t("hero.subheading")}</SubHeading>
		</HeroWrapper>
	)
}

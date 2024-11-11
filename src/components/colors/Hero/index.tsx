import { HeroWrapper, Title, SubHeading } from "./Hero.styled"
import BaseElement from "../../../types/common/BaseElementProps"

export const Hero = ({ t }: BaseElement) => {
	return (
		<HeroWrapper>
			<Title>{t("hero.title")}</Title>
			<SubHeading>{t("hero.summary")}</SubHeading>
		</HeroWrapper>
	)
}

import { HeroWrapper, Title, SubHeading } from "./Hero.styled"
import { HeroProps } from "../types"

export const Hero = ({ t }: HeroProps) => {
	return (
		<HeroWrapper>
			<Title>{t("hero.title")}</Title>
			<SubHeading>{t("hero.summary")}</SubHeading>
		</HeroWrapper>
	)
}

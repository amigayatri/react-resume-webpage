import { HeroWrapper, Title, SubHeading } from "./Hero.styled.ts"
import { HeroBaseProps } from "../types"

export const HeroBase = ({ t }: HeroBaseProps) => {
	return (
		<HeroWrapper>
			<Title>{t("hero.name")}</Title>
			<SubHeading>{t("hero.subheading")}</SubHeading>
		</HeroWrapper>
	)
}

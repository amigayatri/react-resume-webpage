import {
	HeroWrapper,
	Title,
	SubHeading,
	Steps,
	Button,
	Disclaimer
} from "./Hero.styled"
import { HeroProps } from "../../../types"
import { Trans } from "react-i18next/TransWithoutContext"

export const Hero = ({ t, steps, setActive }: HeroProps) => {
	const [stepsId, handleActive] = setActive
	return (
		<HeroWrapper>
			<Title>{t("hero.title")}</Title>
			<SubHeading>
				<Trans
					t={t}
					i18nKey="hero.subheading"
					tOptions={{ stepsNumber: steps }}
				>
					t<Steps>t</Steps>
					<Button onClick={() => handleActive(stepsId)}>t</Button>
				</Trans>
				<Disclaimer>*{t("hero.disclaimer")}</Disclaimer>
			</SubHeading>
		</HeroWrapper>
	)
}

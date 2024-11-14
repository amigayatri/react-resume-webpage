import { HeroWrapper, Title, Text } from "./SimpleHero.styled"
import { SimpleHeroBaseProps } from "."
import { MulticoloredName } from "../client"
export const SimpleHeroBase = ({
	t,
	titleIcon,
	lng,
	local,
	hasMulticolored,
	paletteInfo
}: SimpleHeroBaseProps) => {
	const info =
		paletteInfo === undefined ? { group: "theme", name: "accent" } : paletteInfo
	const title = t("hero.title")
	const text = t("hero.text")
	return (
		<HeroWrapper>
			<Title>
				{hasMulticolored ? (
					<MulticoloredName
						iconId={titleIcon}
						info={info}
						fontSize={40}
						local={local}
						lng={lng}
						legible
						legibleTextColors
					>
						{title}
					</MulticoloredName>
				) : (
					title
				)}
			</Title>
			<Text>{text.length > 0 && text}</Text>
		</HeroWrapper>
	)
}

import { HeroWrapper, Title } from "./Hero.styled.ts"
import { MulticoloredName } from "../../../../common/client.tsx"
import { VisualDescription } from "../VisualDescription/"
import { HeroBaseProps } from "../../types.ts"

export const HeroBase = ({ t, lng }: HeroBaseProps) => {
	return (
		<HeroWrapper>
			<Title>
				<MulticoloredName
					lng={lng}
					local="holidays"
					fontSize={32}
					iconId="calendariobrasileiro"
					legible
					info={{ group: "rainbow", name: "rainbow monokai" }}
				>
					{t("title")}
				</MulticoloredName>
			</Title>
			<VisualDescription t={t} lng={lng} />
		</HeroWrapper>
	)
}

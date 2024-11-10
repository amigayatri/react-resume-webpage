import { HeroWrapper, Title } from "./Hero.styled.ts"
import BaseElement from "../../../types/BaseElementProps.ts"
import { TFunction } from "i18next"
import { MulticoloredName } from "../../common/MulticoloredName/client.tsx"
import { VisualDescription } from "../VisualDescription/"

interface HeroBaseProps extends BaseElement {
	t: TFunction<any, undefined>
}

export const HeroBase = ({ t, lng, i18n }: HeroBaseProps) => {
	return (
		<HeroWrapper>
			<Title>
				<MulticoloredName
					lng={lng}
					local="holidays"
					fontSize={32}
					iconId="braziliancalendar"
					legible
					info={{ group: "rainbow", name: "rainbow monokai" }}
				>
					{t("title")}
				</MulticoloredName>
			</Title>
			<VisualDescription t={t} lng={lng} i18n={i18n} />
		</HeroWrapper>
	)
}

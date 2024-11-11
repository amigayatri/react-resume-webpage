import { Title, HeroWrapper } from "./Hero.styled.ts"
import BaseElement from "../../../types/common/BaseElementProps.ts"
import { TFunction } from "i18next"
import { MulticoloredName } from "../../common/MulticoloredName/client.tsx"
import { UsedIcons } from "../UsedIcons/client.tsx"

interface HeroBaseProps extends BaseElement {
	t: TFunction<any, undefined>
}

export const HeroBase = ({ t, lng }: HeroBaseProps) => {
	return (
		<HeroWrapper>
			<Title>
				<MulticoloredName
					local="icons"
					iconId="egyptianwalk"
					info={{ group: "rainbow", name: "rainbow monokai" }}
					fontSize={32}
					legible
					lng={lng}
				>
					{t("title")}
				</MulticoloredName>
			</Title>
			<UsedIcons lng={lng} />
		</HeroWrapper>
	)
}

import { Title, HeroWrapper } from "./Hero.styled.ts"
import { MulticoloredName } from "../../../common/client.tsx"
import { UsedIcons } from "../UsedIcons/client.tsx"
import { HeroBaseProps } from "../types.ts"

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

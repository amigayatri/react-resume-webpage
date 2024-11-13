import { PageLinkBaseProps } from "../"
import {
	InternalLinkTag,
	ButtonWrapper,
	ButtonStyle,
	Label
} from "./Common.styled.ts"
import { SVGIcon } from "../../SVGIcon/"

export const InternalLink = ({ t, lng, to }: PageLinkBaseProps) => {
	const { path, icon, key, local } = to
	return (
		<ButtonWrapper>
			<InternalLinkTag href={`/${lng}/${path}`}>
				<ButtonStyle>
					<SVGIcon
						lng={lng}
						noTransition
						local={local || "unset"}
						size={48}
						id={icon}
					/>
					<Label> {t(key)}</Label>
				</ButtonStyle>
			</InternalLinkTag>
		</ButtonWrapper>
	)
}

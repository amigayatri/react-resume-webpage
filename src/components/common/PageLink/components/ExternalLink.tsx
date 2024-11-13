import { PageLinkBaseProps } from "../"
import {
	ExternalLinkTag,
	LabelWrapper,
	ButtonWrapper,
	ButtonStyle,
	Label
} from "./Common.styled.ts"
import { linkProps } from "../../../../constants/linkprops.ts"
import { SVGIcon } from "../../SVGIcon/"

export const ExternalLink = ({ t, lng, to }: PageLinkBaseProps) => {
	const { path, icon, key, local } = to
	return (
		<ButtonWrapper>
			<ExternalLinkTag {...linkProps} href={path}>
				<ButtonStyle>
					<SVGIcon
						noTransition
						lng={lng}
						local={local || "unset"}
						size={48}
						id={icon}
					/>
					<LabelWrapper>
						<Label>{t(key)}</Label>
						<SVGIcon
							lng={lng}
							noTransition
							local={local || "unset"}
							id="external"
							size={20}
						/>
					</LabelWrapper>
				</ButtonStyle>
			</ExternalLinkTag>
		</ButtonWrapper>
	)
}

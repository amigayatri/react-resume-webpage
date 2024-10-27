import BaseElement from "../../../types/BaseElementProps"
import Link from "../../../types/LinkProps.ts"
import {
	ExternalLinkTag,
	InternalLinkTag,
	LabelWrapper,
	ButtonWrapper,
	ButtonStyle,
	Label
} from "./HomeLink.styled.ts"
import { linkProps } from "../../../constants/linkprops.ts"
import { SVGIcon } from "../../common/SVGIcon/index.tsx"
interface HomeLinkBase extends BaseElement {
	to: Link
}

export const HomeLinkBase = ({ i18n, lng, to }: HomeLinkBase) => {
	const t = i18n.getFixedT(lng, "translation")
	if (to.isExternal)
		return (
			<ButtonWrapper>
				<ExternalLinkTag {...linkProps} href={to.path}>
					<ButtonStyle>
						<SVGIcon
							noTransition
							lng={lng}
							local="home"
							size={48}
							id={to.icon}
						/>
						<LabelWrapper>
							<Label>{t(to.key)}</Label>
							<SVGIcon
								lng={lng}
								noTransition
								local="home"
								id="external"
								size={20}
							/>
						</LabelWrapper>
					</ButtonStyle>
				</ExternalLinkTag>
			</ButtonWrapper>
		)
	else
		return (
			<ButtonWrapper>
				<InternalLinkTag>
					<ButtonStyle>
						<SVGIcon
							lng={lng}
							noTransition
							local="home"
							size={48}
							id={to.icon}
						/>
						<Label> {t(to.key)}</Label>
					</ButtonStyle>
				</InternalLinkTag>
			</ButtonWrapper>
		)
}

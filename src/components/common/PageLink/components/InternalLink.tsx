import { PageLinkBaseProps } from "../"
import {
	InternalLinkTag,
	ButtonWrapper,
	ButtonStyle,
	Label,
	Detail
} from "./Common.styled.ts"
import { SVGIcon } from "../../client.tsx"

export const InternalLink = ({
	t,
	lng,
	to,
	local,
	hasDetails
}: PageLinkBaseProps) => {
	const { path, icon, key } = to
	return (
		<ButtonWrapper>
			<InternalLinkTag href={`/${lng}/${path}`}>
				<ButtonStyle>
					<SVGIcon lng={lng} noTransition local={local} size={48} id={icon} />
					<Label> {t(key)}</Label>
					{hasDetails && <Detail>{t(`details.${local}.${key}`)}</Detail>}
				</ButtonStyle>
			</InternalLinkTag>
		</ButtonWrapper>
	)
}

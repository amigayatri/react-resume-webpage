import { HeaderWrapper, Title, SubHeading } from "./Header.styled.ts"
import BaseElement from "../../../types/BaseElementProps.ts"

export const HeaderBase = ({ i18n, lng }: BaseElement) => {
	const t = i18n.getFixedT(lng, "translation")

	return (
		<HeaderWrapper>
			<Title>{t("home.header.subheading")}</Title>
			<SubHeading>{t("home.header.subheading")}</SubHeading>
		</HeaderWrapper>
	)
}

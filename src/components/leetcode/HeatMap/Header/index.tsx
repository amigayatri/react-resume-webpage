import { useTranslation } from "react-i18next"
import { HeaderWrapper, ButtonsWrapper, Title } from "./Header.styled"
import Button from "./Button"

interface HeatmapHeaderProps {
	changeOrder: () => void
	changeStyle: () => void
	reverse: boolean
}

const Header = ({ changeOrder, reverse, changeStyle }: HeatmapHeaderProps) => {
	const { t } = useTranslation()
	return (
		<HeaderWrapper>
			<ButtonsWrapper>
				<Button fn={changeStyle} txt="Simple mode" />
				<Button
					fn={changeOrder}
					txt={t("leetcode.heatmap.reverse." + reverse)}
				/>
			</ButtonsWrapper>
			<Title>{t("leetcode.heatmap.title")}</Title>
		</HeaderWrapper>
	)
}

export default Header

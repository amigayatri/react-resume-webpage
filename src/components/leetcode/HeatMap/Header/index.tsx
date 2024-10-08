import { useTranslation } from "react-i18next"
import { HeaderWrapper, ButtonsWrapper } from "./Header.styled"
import Button from "./Button"
import { Title } from "../../Common.styled"

interface HeatmapHeaderProps {
	changeOrder: () => void
	changeStyle: () => void
	reverse: boolean
	simple: boolean
}

const Header = ({
	changeOrder,
	reverse,
	simple,
	changeStyle
}: HeatmapHeaderProps) => {
	const { t } = useTranslation()
	return (
		<HeaderWrapper>
			<ButtonsWrapper>
				<Button fn={changeStyle} txt={t("leetcode.heatmap.mode." + simple)} />
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

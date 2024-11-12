import { HeaderWrapper, ButtonsWrapper } from "./Header.styled"
import { Button } from "./Button"
import { Title } from "../../Common.styled"
import { HeatMapHeaderProps } from "../../../../../types/leetcode/"

export const Header = ({
	changeOrder,
	isReversed,
	isSimple,
	changeStyle,
	t,
	lng
}: HeatMapHeaderProps) => {
	return (
		<HeaderWrapper>
			<ButtonsWrapper>
				<Button
					t={t}
					lng={lng}
					fn={changeStyle}
					txt={t("heatmap.mode." + isSimple)}
				/>
				<Button
					t={t}
					lng={lng}
					fn={changeOrder}
					txt={t("heatmap.reverse." + isReversed)}
				/>
			</ButtonsWrapper>
			<Title>{t("heatmap.title")}</Title>
		</HeaderWrapper>
	)
}

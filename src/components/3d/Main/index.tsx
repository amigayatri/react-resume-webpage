import {
	MainWrapper,
	Description,
	Title,
	Section,
	Summary,
	TabContent,
	TabName,
	TabNamesWrapper,
	TabsWrapper
} from "./Main.styled"
import SplineScene from "../SplineScene"
import { useTranslation } from "react-i18next"

const Main = () => {
	const { t } = useTranslation()
	const tabs = new Map([["spline", <SplineScene />]])
	const names = Array.from(tabs.keys())
	const elements = Array.from(tabs.values())
	return (
		<MainWrapper>
			<Description>
				<Title>{t("3d.title")}</Title>
				<Summary>{t("3d.summary")}</Summary>
			</Description>
			<Section>
				<TabsWrapper>
					<TabNamesWrapper>
						{names.map((name) => (
							<TabName key={"tab-name" + name}>{t(`3d.${name}.name`)}</TabName>
						))}
					</TabNamesWrapper>
					{elements.map((el) => (
						<TabContent>{el}</TabContent>
					))}
				</TabsWrapper>
			</Section>
		</MainWrapper>
	)
}

export default Main

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
	const entries = Array.from(tabs.entries())
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
					{entries.map(([name, el]) => (
						<TabContent key={"tab-el-" + name}>{el}</TabContent>
					))}
				</TabsWrapper>
			</Section>
		</MainWrapper>
	)
}

export default Main

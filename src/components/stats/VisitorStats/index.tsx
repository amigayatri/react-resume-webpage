import VisitorMap from "../../common/VisitorMap"
import {
	VisitorStatsWrapper,
	ContentWrapper,
	MainWrapper,
	SideWrapper,
	SourceLink,
	SideMapContainer
} from "./VisitorStats.styled"
import { Title, Summary } from "../Common.styled"
import { Trans, useTranslation } from "react-i18next"
import linkProps from "../../../constants/linkprops"

const VisitorStats = () => {
	const { t } = useTranslation()
	return (
		<VisitorStatsWrapper>
			<Title>{t("stats.MapRevolver.title")}</Title>
			<ContentWrapper>
				<MainWrapper>
					<VisitorMap id="globe" fullpage />
				</MainWrapper>
				<SideWrapper>
					<VisitorMap id="chart" />
					<SideMapContainer>
						<VisitorMap id="map" fullpage />
					</SideMapContainer>
					<Summary>
						<Trans i18nKey="stats.MapRevolver.summary">
							text
							<SourceLink
								href="https://www.revolvermaps.com/livestats/54mojodxwyq/"
								{...linkProps}
							>
								link
							</SourceLink>
							text
						</Trans>
					</Summary>
				</SideWrapper>
			</ContentWrapper>
		</VisitorStatsWrapper>
	)
}

export default VisitorStats

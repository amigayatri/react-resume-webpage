import { useTranslation } from "react-i18next"
import { Wrapper, ListWrapper, Target, PairWrapper } from "./TargetList.styled"
import { SectionTitle, SubHeading } from "../Common.styled"
import { removeTarget } from "../../../lib/colors"

const TargetList = ({
	targets,
	regenerate
}: {
	updatedList: boolean
	targets: string[][]
	regenerate: () => void
}) => {
	const { t } = useTranslation()
	const handleDelete = (key: string) => {
		if (targets.length === 1) return
		removeTarget(key)
		regenerate()
	}
	return (
		<Wrapper>
			<SectionTitle>{t("colors.targetList.title")}</SectionTitle>
			<SubHeading>{t("colors.targetList.summary")}</SubHeading>
			<SubHeading>
				{t(`colors.targetList.delete.${targets.length > 1}`)}
			</SubHeading>
			<ListWrapper>
				{targets.map(([from, to], idx) => {
					return (
						<PairWrapper
							$isActive={targets.length > 1}
							onClick={() => handleDelete(from)}
							key={`pair-${idx}`}
						>
							<Target $bg={from} $color={to}>
								{from}
							</Target>
							<Target $bg={to} $color={from}>
								{to}
							</Target>
						</PairWrapper>
					)
				})}
			</ListWrapper>
		</Wrapper>
	)
}

export default TargetList

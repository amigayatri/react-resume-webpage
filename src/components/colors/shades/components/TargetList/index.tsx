import { Wrapper, ListWrapper, Target, PairWrapper } from "./TargetList.styled"
import { SectionTitle, SubHeading, SubHeadingWrapper } from "../Common.styled"
import { removeTarget } from "../../../../../lib/colors/"
import { TargetListProps } from "../types"
import { Select } from "../Select/client"

export const TargetList = ({
	targets,
	regenerate,
	t,
	addPalette,
	lng
}: TargetListProps) => {
	const handleDelete = (key: string) => {
		if (targets.length === 1) return
		removeTarget(key)
		regenerate()
	}
	return (
		<Wrapper>
			<SectionTitle>{t("targetList.title")}</SectionTitle>
			<SubHeadingWrapper>
				<div>
					<SubHeading>{t("targetList.summary")}</SubHeading>
					<SubHeading>
						{t(`targetList.delete.${targets.length > 1}`)}
					</SubHeading>
				</div>
				<Select
					lng={lng}
					addPalette={addPalette}
					isShowing={targets.length === 1}
				/>
			</SubHeadingWrapper>
			<ListWrapper>
				{targets.map(([from, to], idx) => {
					return (
						<PairWrapper
							$isActive={targets.length > 1}
							onClick={() => handleDelete(from)}
							key={`pair-${idx}`}
						>
							<Target
								style={{ backgroundColor: from, color: to, borderColor: to }}
							>
								{from}
							</Target>
							<Target
								style={{ backgroundColor: to, color: from, borderColor: from }}
							>
								{to}
							</Target>
						</PairWrapper>
					)
				})}
			</ListWrapper>
		</Wrapper>
	)
}

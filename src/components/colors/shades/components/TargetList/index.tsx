import { Wrapper, ListWrapper, Target, PairWrapper } from "./TargetList.styled"
import { SectionTitle, SubHeading, SubHeadingWrapper } from "../Common.styled"
import { TargetListProps } from "../types"
import { Select } from "../Select/client"

const maxToShowSelect = 4

export const TargetList = ({
	regenerate,
	t,
	addPalette,
	targets,
	controller,
	titleColor,
	lng
}: TargetListProps) => {
	const handleDelete = (key: string) => {
		if (targets.length === 1) return
		controller.targets.remove(key)
		regenerate()
	}
	return (
		<Wrapper>
			<SectionTitle style={{ color: titleColor }}>
				{t("targetList.title")}
			</SectionTitle>
			<SubHeadingWrapper>
				<SubHeading>{`${t("targetList.summary")}\n${t(
					`targetList.delete.${targets.length > 1}`
				)}`}</SubHeading>
				<Select
					colorFunction="target"
					lng={lng}
					addPalette={addPalette}
					isShowing={targets.length <= maxToShowSelect}
				/>
			</SubHeadingWrapper>
			<ListWrapper>
				{controller.targets.get().map(([from, to], idx) => {
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
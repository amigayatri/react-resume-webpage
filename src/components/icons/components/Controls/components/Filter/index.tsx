import {
	SelectsWrapper,
	FilterWrapper,
	ToggleContainer,
	AllButton,
	ButtonContent,
	ButtonLabel
} from "./Filter.styled"
import { generateFilterOptions, getOptions } from "./options"
import { Select, SVGIcon, Toggle } from "../../../../../common/client"
import { ToggleIconProps } from "../../../../../../types/common"
import { useEffect, useState } from "react"
import { FilterProps } from "../types"

const filterIconSettings: ToggleIconProps = {
	id: "filter",
	trueValAsStr: "showing",
	shouldChange: false,
	options: {
		true: "filter",
		false: "filteroff"
	}
}

const notShowing = "not-showing"
const showing = "showing"

export const Filter = ({ lng, handleGroups, t }: FilterProps) => {
	const [showingFilter, setShowingFilter] = useState("not-showing")
	const [selectedGroup, setSelectedGroup] = useState("all")
	const [filterOptions] = useState(generateFilterOptions())
	const [selectedFilter, setSelectedFilter] = useState("groups")
	const [options, setOptions] = useState(getOptions("all"))

	const handleShowFilter = () => {
		if (showingFilter == showing) setShowingFilter(notShowing)
		else setShowingFilter(showing)
	}

	useEffect(() => {
		handleGroups(selectedGroup)
		setOptions(getOptions(selectedFilter))
	}, [selectedGroup, selectedFilter])

	return (
		<FilterWrapper $showing={showing == showingFilter}>
			<ToggleContainer>
				<Toggle
					size={24}
					lng={lng}
					icon={filterIconSettings}
					label={t("filter.toggle")}
					showLabel
					stateChangeFN={handleShowFilter}
					state={showingFilter}
				/>
				<AllButton
					$showing={
						selectedGroup !== "all" && showingFilter == showing
					}
					onClick={() => {
						setSelectedGroup("all")
					}}
				>
					<ButtonContent>
						<SVGIcon
							size={24}
							lng={lng}
							local="icon-filter"
							id="filteroff"
						/>
						<ButtonLabel>{t("filter.button")}</ButtonLabel>
					</ButtonContent>
				</AllButton>
			</ToggleContainer>
			<SelectsWrapper>
				<Select
					defaultValue={selectedFilter}
					label={t("filter.select.label")}
					options={filterOptions}
					id="filter-options"
					fontSize={1.125}
					lng={lng}
					onHeader={false}
					local="iconlist"
					namespace="iconlist"
					onSelectChange={({ target }) => {
						setSelectedFilter(target.value)
					}}
				/>
				<Select
					defaultValue={selectedGroup}
					label={t("select.label")}
					options={options}
					id="filter-icons"
					fontSize={1.125}
					lng={lng}
					onHeader={false}
					local="iconlist"
					namespace="iconlist"
					onSelectChange={({ target }) => {
						setSelectedGroup(target.value)
					}}
				/>
			</SelectsWrapper>
		</FilterWrapper>
	)
}

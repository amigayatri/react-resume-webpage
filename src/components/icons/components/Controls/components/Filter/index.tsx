import { SelectWrapper, FilterWrapper } from "./Filter.styled"
import { generateGroupOptions } from "./options"
import { Select, Toggle } from "../../../../../common/client"
import { ToggleIconProps, GroupProps } from "../../../../../../types/common"
import { useEffect, useState } from "react"
import { FilterProps } from "../types"

const filterIconSettings: ToggleIconProps = {
	id: "filter",
	trueValAsStr: "showing",
	shouldChange: true,
	options: {
		true: "filter",
		false: "filteroff"
	}
}

const notShowing = "not-showing"
const showing = "showing"

const emptyOptions: GroupProps[] = []

export const Filter = ({ lng, handleGroups, t }: FilterProps) => {
	const [options, setOptions] = useState(emptyOptions)
	const [showingFilter, setShowingFilter] = useState("not-showing")
	const [selectedGroup, setSelectedGroup] = useState("all")

	const handleShowFilter = () => {
		if (showingFilter == showing) setShowingFilter(notShowing)
		else setShowingFilter(showing)
	}

	useEffect(() => {
		const options = generateGroupOptions()
		setOptions(options)
	}, [])

	useEffect(() => {
		handleGroups(selectedGroup)
	}, [selectedGroup])

	return (
		<FilterWrapper>
			<Toggle
				lng={lng}
				icon={filterIconSettings}
				label={""}
				stateChangeFN={handleShowFilter}
				state={showingFilter}
			/>
			<SelectWrapper $showing={showing === showingFilter}>
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
						setShowingFilter(notShowing)
					}}
				/>
			</SelectWrapper>
		</FilterWrapper>
	)
}

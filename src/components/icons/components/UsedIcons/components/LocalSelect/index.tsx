import { SelectWrapper } from "./LocalSelect.styled"
import { generateLocalOptions, emptyOptions } from "./functions"
import { Select } from "../../../../../common/client"
import { useEffect, useState } from "react"
import { LocalSelectProps } from "../types"

export const LocalSelect = ({
	lng,
	t,
	localArr,
	localState
}: LocalSelectProps) => {
	const [options, setOptions] = useState(emptyOptions)
	const [selectedLocal, setSelectedLocal] = localState

	useEffect(() => {
		const options = generateLocalOptions(localArr)
		setOptions(options)
	}, [localArr])

	return (
		<SelectWrapper>
			<Select
				defaultValue={selectedLocal}
				label={t("stats.select.label")}
				options={options}
				id="filter-icons"
				fontSize={1.125}
				lng={lng}
				onHeader={false}
				local="iconlist"
				namespace="iconlist"
				onSelectChange={({ target }) => {
					setSelectedLocal(target.value)
				}}
			/>
		</SelectWrapper>
	)
}

import { LocalStatsProps } from "../types"
import { LocalSelect, IDList } from "../"
import { useEffect, useState } from "react"
import { iconKey } from "../../../../../../icons"
import { Progress } from "../../../../../common/client"
import { useTheme } from "styled-components"

const emptyIDs: iconKey[] = []

export const LocalStats = ({ lng, t, localMap, total }: LocalStatsProps) => {
	const [selectedLocal, setSelectedLocal] = useState("_")
	const [localIcons, setLocalIcons] = useState(emptyIDs)

	useEffect(() => {
		const newLocalIDs = localMap.get(selectedLocal)
		if (newLocalIDs === undefined) {
			setLocalIcons(emptyIDs)
		} else {
			setLocalIcons(Array.from(newLocalIDs))
		}
	}, [selectedLocal])

	useEffect(() => {
		setSelectedLocal("_")
	}, [localMap])

	const defaultProps = { t, lng }
	const theme = useTheme()
	return (
		<>
			<LocalSelect
				{...defaultProps}
				localArr={Array.from(localMap.keys())}
				localState={[selectedLocal, setSelectedLocal]}
			/>
			<Progress
				{...defaultProps}
				type="circle"
				color={{ done: theme.accent, total: theme.primary }}
				title=""
				size={160}
				progress={{ total, done: localIcons.length }}
			/>
			<IDList
				{...defaultProps}
				idList={localIcons}
				t={t}
				lng={lng}
				currLocal={selectedLocal}
			/>
		</>
	)
}

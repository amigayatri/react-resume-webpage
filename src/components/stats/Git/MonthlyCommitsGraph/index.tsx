import { useTranslation } from "react-i18next"
import { CommitProps } from "../../../../api/Git/format/RepoCommits"
import Graph from "../../Graph"
import { MonthlyCommitsGraphWrapper } from "./MonthlyCommitsGraph.styled"
import { Subtitle } from "../../Common.styled"

interface MonthlyCommitsGraphProps {
	commits: Map<string, CommitProps[]>
}

const MonthlyCommitsGraph = ({ commits }: MonthlyCommitsGraphProps) => {
	const { i18n, t } = useTranslation()
	const commitsByYear = new Map()
	commits.forEach((val, key) => {
		const date = new Date(key)
		const month = date.toLocaleDateString(i18n.language, {
			month: "long"
		})
		const year = date.toLocaleDateString(i18n.language, {
			year: "numeric"
		})
		const yearlyCommits = commitsByYear.has(year)
			? commitsByYear.get(year)
			: new Map()
		const n = val.length
		yearlyCommits.set(month, (yearlyCommits.get(month) || 0) + n)
		commitsByYear.set(year, yearlyCommits)
	})
	const allMonths: string[] = []
	for (let i = 1; i <= 12; i++) {
		const date = new Date(`2024/${i}/01`)
		const month = date.toLocaleDateString(i18n.language, {
			month: "long"
		})
		allMonths.push(month)
	}
	const years = Array.from(commitsByYear.keys())
	const title = t("stats.git.graph.title", { actionName: "commits" })
	const currYear = new Date().toLocaleDateString(i18n.language, {
		year: "numeric"
	})
	const currMonth = new Date().getMonth()
	const showYear = (year: string, idx: number) => {
		if (year === currYear) allMonths.splice(currMonth + 1)
		return (
			<Graph
				title={year}
				showTitle={years.length > 0}
				allKeys={allMonths}
				key={`monthly-commits-${idx}`}
				data={commitsByYear.get(year)}
				type="bar"
			/>
		)
	}
	return (
		<MonthlyCommitsGraphWrapper>
			<Subtitle>{title}</Subtitle>
			{years.map((year, idx) => showYear(year, idx))}
		</MonthlyCommitsGraphWrapper>
	)
}

export default MonthlyCommitsGraph

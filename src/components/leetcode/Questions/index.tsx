import {
	QuestionsWrapper,
	QuestionsDetailsWrapper,
	TotalWrapper
} from "./Questions.styled"
import Progress from "../Progress"
import { useTheme } from "styled-components"
import { useTranslation } from "react-i18next"
import LeetCodeProps from "../../../types/LeetCodeProps"
import { useState, useEffect } from "react"
import Loading from "../../common/Loading"

const emptyInfo = { done: -1, acceptance: -1, total: -1 }

const Questions = ({ leetcode }: LeetCodeProps) => {
	const [easyInfo, setEasyInfo] = useState(emptyInfo)
	const [totalInfo, setTotalInfo] = useState(emptyInfo)
	const [hardInfo, setHardInfo] = useState(emptyInfo)
	const [mediumInfo, setMediumInfo] = useState(emptyInfo)
	useEffect(() => {
		const easy = { done: -1, acceptance: -1, total: -1 },
			hard = { done: -1, acceptance: -1, total: -1 },
			medium = { done: -1, acceptance: -1, total: -1 },
			total = { done: -1, acceptance: -1, total: -1 }
		leetcode.getSolved().then((res) => {
			easy.done = res.solved.easy
			hard.done = res.solved.hard
			medium.done = res.solved.medium
			total.done = res.solved.total
			easy.acceptance = res.acceptance.easy
			hard.acceptance = res.acceptance.hard
			medium.acceptance = res.acceptance.medium
			total.acceptance = res.acceptance.total
		})
		leetcode.getQuestions().then((res) => {
			easy.total = res.easy
			hard.total = res.hard
			medium.total = res.medium
			total.total = res.total
			setEasyInfo(easy)
			setHardInfo(hard)
			setMediumInfo(medium)
			setTotalInfo(total)
		})
	}, [])
	const theme = useTheme()
	const totalColor = theme.primary
	const monokaiBase = theme.colors.base
	const pink = monokaiBase.pink
	const green = monokaiBase.green
	const orange = monokaiBase.orange
	const red = monokaiBase.red
	const { t } = useTranslation()
	if (totalInfo.done === -1) {
		return (
			<QuestionsWrapper>
				<Loading type="pacman" />
			</QuestionsWrapper>
		)
	}
	return (
		<QuestionsWrapper>
			<TotalWrapper>
				<Progress
					color={{ done: pink, total: totalColor }}
					title={t("leetcode.questions.title")}
					progress={totalInfo}
					type="circle"
					size={256}
				/>
			</TotalWrapper>
			<QuestionsDetailsWrapper>
				<Progress
					color={{ done: green, total: totalColor }}
					title={t("leetcode.questions.easy")}
					progress={easyInfo}
					type="bar"
				/>
				<Progress
					color={{ done: orange, total: totalColor }}
					title={t("leetcode.questions.medium")}
					progress={mediumInfo}
					type="bar"
				/>
				<Progress
					color={{ done: red, total: totalColor }}
					title={t("leetcode.questions.hard")}
					progress={hardInfo}
					type="bar"
				/>
			</QuestionsDetailsWrapper>
		</QuestionsWrapper>
	)
}

export default Questions

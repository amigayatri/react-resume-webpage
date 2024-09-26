import {
	QuestionsWrapper,
	QuestionsDetailsWrapper,
	Title,
	TotalWrapper
} from "./Questions.styled"
import ProgressProps from "../../../types/ProgressProps"
import Progress from "../Progress"
import { useTheme } from "styled-components"
import { useTranslation } from "react-i18next"

interface QuestionsProps {
	questions: {
		hard: ProgressProps
		medium: ProgressProps
		easy: ProgressProps
		total: ProgressProps
	}
}

const Questions = ({ questions }: QuestionsProps) => {
	const { hard, medium, easy, total } = questions
	const theme = useTheme()
	const totalColor = theme.primary
	const monokaiBase = theme.colors.base
	const pink = monokaiBase.pink
	const green = monokaiBase.green
	const orange = monokaiBase.orange
	const red = monokaiBase.red
	const { t } = useTranslation()
	return (
		<QuestionsWrapper>
			<TotalWrapper>
				<Progress
					color={{ done: pink, total: totalColor }}
					title=""
					progress={total}
					type="circle"
					size={256}
				/>
				<Title>{t("leetcode.questions.title")}</Title>
			</TotalWrapper>
			<QuestionsDetailsWrapper>
				<Progress
					color={{ done: green, total: totalColor }}
					title={t("leetcode.questions.easy")}
					progress={easy}
					type="bar"
				/>
				<Progress
					color={{ done: orange, total: totalColor }}
					title={t("leetcode.questions.medium")}
					progress={medium}
					type="bar"
				/>
				<Progress
					color={{ done: red, total: totalColor }}
					title={t("leetcode.questions.hard")}
					progress={hard}
					type="bar"
				/>
			</QuestionsDetailsWrapper>
		</QuestionsWrapper>
	)
}

export default Questions

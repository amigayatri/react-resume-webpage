import { QuestionsWrapper, QuestionsDetailsWrapper } from "./Questions.styled"
import ProgressProps from "../../../types/ProgressProps"
import Progress from "../Progress"
import { useTheme } from "styled-components"

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
	return (
		<QuestionsWrapper>
			<Progress
				color={{ done: pink, total: totalColor }}
				title="Total"
				progress={total}
				type="circle"
				size={256}
			/>
			<QuestionsDetailsWrapper>
				<Progress
					color={{ done: green, total: totalColor }}
					title="Easy"
					progress={easy}
					type="bar"
				/>
				<Progress
					color={{ done: orange, total: totalColor }}
					title="Medium"
					progress={medium}
					type="bar"
				/>
				<Progress
					color={{ done: red, total: totalColor }}
					title="Hard"
					progress={hard}
					type="bar"
				/>
			</QuestionsDetailsWrapper>
		</QuestionsWrapper>
	)
}

export default Questions

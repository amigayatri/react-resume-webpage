import {
	DetailedBadgeWrapper,
	DetailMessage,
	Success
} from "./DetailedBadge.styled"
import BadgeProps from "../../../../types/BadgeProps"
import SVGIcon from "../../../../icons/SVGIcon"
import { useTranslation } from "react-i18next"

interface DetailedBadgeProps {
	details: BadgeProps
}

const DetailedBadge = ({ details }: DetailedBadgeProps) => {
	const { t } = useTranslation()
	const showMessage = () => {
		const placeholder = t("leetcode.badges.details.false")
		if (details.name === "") return <DetailMessage>{placeholder}</DetailMessage>
		const success = t("leetcode.badges.details.true", {
			BadgeName: details.name
		})
		console.log(success)
		return (
			<DetailMessage>
				{formatDate()}
				<Success>{success}</Success>
			</DetailMessage>
		)
	}
	const formatDate = () => {
		const { date } = details
		const m = date.getMonth() + 1
		const d = date.getDate()
		const mm = (m <= 9 ? "0" : "") + m
		const dd = (d <= 9 ? "0" : "") + d
		return `${date.getFullYear()}/${mm}/${dd}: `
	}
	return (
		<DetailedBadgeWrapper>
			<SVGIcon id="terminal" size={32} />
			{showMessage()}
		</DetailedBadgeWrapper>
	)
}

export default DetailedBadge

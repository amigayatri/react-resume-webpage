import {
	DetailedBadgeWrapper,
	DetailMessage,
	Success
} from "./DetailedBadge.styled"
import { SVGIcon } from "../../../../../common/client"
import { DetailedBadgeProps } from "../../../types"

export const DetailedBadge = ({ details, t, lng }: DetailedBadgeProps) => {
	const showMessage = () => {
		const placeholder = t("badges.details.false")
		if (details.name === "") return <DetailMessage>{placeholder}</DetailMessage>
		const success = t("badges.details.true", {
			BadgeName: details.name
		})
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
			<SVGIcon lng={lng} local="leetcode" id="terminal" size={32} />
			{showMessage()}
		</DetailedBadgeWrapper>
	)
}

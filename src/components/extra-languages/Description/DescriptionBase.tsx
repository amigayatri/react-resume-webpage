import {
	Title,
	Summary,
	DescriptionWrapper,
	PageSelectWrapper
} from "./Description.styled"
import { LanguageSelect } from "../../common/client"
import { useRouter } from "next/navigation"
import { ChangeEvent } from "react"
import { DescriptionBaseProps } from "../types"

export const DescriptionBase = ({ t, lng }: DescriptionBaseProps) => {
	const router = useRouter()

	const onLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const locale = e.target.value
		router.push(locale)
	}
	return (
		<DescriptionWrapper>
			<Title>{t("title")}</Title>
			<Summary>{t("summary")}</Summary>
			<PageSelectWrapper>
				<LanguageSelect
					onError={false}
					onLanguageChange={onLanguageChange}
					lng={lng}
					isExtra
				/>
			</PageSelectWrapper>
		</DescriptionWrapper>
	)
}

import {
	Title,
	Summary,
	DescriptionWrapper,
	PageSelectWrapper
} from "./Description.styled"
import BaseElement from "../../../types/common/BaseElementProps.ts"
import { TFunction } from "i18next"
import { LanguageSelect } from "../../common/LanguageSelect/client.tsx"
import { useRouter } from "next/navigation"
import { ChangeEvent } from "react"

interface DescriptionBaseProps extends BaseElement {
	t: TFunction<any, undefined>
}

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

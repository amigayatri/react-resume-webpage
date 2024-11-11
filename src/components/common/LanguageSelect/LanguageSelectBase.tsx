import { Select } from "../Select/client.tsx"
import {
	basicLanguages,
	extraLanguages,
	fallbackLng
} from "../../../i18n/settings.ts"
import { LanguageSelectProps } from "./index.tsx"
import { TFunction } from "i18next"
import React from "react"
import { usePathname } from "next/navigation"

interface LanguageSelectBaseProps extends LanguageSelectProps {
	t: TFunction<any, undefined>
}

export const LanguageSelectBase = ({
	lng,
	isExtra,
	onLanguageChange,
	onError,
	t
}: LanguageSelectBaseProps) => {
	const pathname = usePathname()
	const langOptions = [
		...basicLanguages.map((lang) => {
			if (pathname === null) return { value: "", key: "" }
			return {
				value: onError ? "/" + lang : pathname.replace(lng, lang),
				key: `menu.select.basic.${lang}`
			}
		})
	]
	!isExtra &&
		langOptions.push({
			value: `${lng}/extra-languages`,
			key: "menu.select.basic.more"
		})
	const extraOptions = extraLanguages.map((lang) => {
		return {
			value: pathname?.replace(lng, lang) || "",
			key: `menu.select.extra.${lang}`
		}
	})
	return (
		<Select
			defaultValue={onError ? `/${fallbackLng}` : pathname || ""}
			onHeader={!isExtra}
			fontSize={isExtra ? 1.75 : 1.25}
			onSelectChange={onLanguageChange}
			options={[
				{ groupKey: "menu.select.groups.basic", options: langOptions },
				{
					groupKey: "menu.select.groups.extra",
					options: isExtra ? extraOptions : []
				}
			]}
			id={isExtra ? "extra-languages-select" : "navbar-language-select"}
			namespace="common"
			lng={lng}
			label={t("menu.select.label")}
		/>
	)
}

import { Select } from "../client.tsx"
import {
	basicLanguages,
	extraLanguages,
	fallbackLng
} from "../../../i18n/settings.ts"
import { LanguageSelectBaseProps } from "./"
import React from "react"
import { usePathname } from "next/navigation"
import { languageNames } from "../../../constants/languages-names.ts"
import { onSelectChange, OptionProps } from "../../../types/common/"
import { useRouter } from "next/navigation"

type generateOption = (lang: string, isExtra: boolean) => OptionProps

export const LanguageSelectBase = ({
	lng,
	isExtra,
	onError,
	t
}: LanguageSelectBaseProps) => {
	const router = useRouter()
	const pathname = usePathname()
	const getLanguageName: (lang: string) => string | undefined = (lang) => {
		if (lang === lng) return undefined
		return ` (${languageNames[lang]})`
	}
	const generateOption: generateOption = (lang, isExtra) => {
		const keyPrefix = isExtra ? "extra" : "basic"
		const value =
			!isExtra && onError ? "/" + lang : pathname?.replace(lng, lang) || ""
		return {
			value,
			key: `${keyPrefix}.${lang}`,
			extraText: getLanguageName(lang)
		}
	}
	const langOptions = [
		...basicLanguages.map((lang) => generateOption(lang, false))
	]
	const extraPath = `/${lng}/extra-languages`
	!isExtra &&
		pathname !== extraPath &&
		langOptions.push({
			value: extraPath,
			key: "basic.more"
		})
	const extraOptions = extraLanguages.map((lang) => generateOption(lang, true))
	const onLanguageChange: onSelectChange = ({ target }) => {
		const locale = target.value
		router.push(locale)
	}
	return (
		<Select
			local={isExtra ? "extra-languages" : "header"}
			iconId="translate"
			defaultValue={onError ? `/${fallbackLng}` : pathname || ""}
			onHeader={!isExtra}
			fontSize={isExtra ? 1.75 : 1.25}
			onSelectChange={onLanguageChange}
			options={[
				{ groupKey: "groups.basic", options: langOptions },
				{
					groupKey: "groups.extra",
					options: isExtra ? extraOptions : []
				}
			]}
			id={isExtra ? "extra-languages-select" : "navbar-language-select"}
			namespace="language-select"
			lng={lng}
			label={t("label")}
		/>
	)
}

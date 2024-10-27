"use client"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

const useDocumentTitle = (id: string) => {
	const { t } = useTranslation()
	const title = `${t("paths.title.".concat(id))}`.concat(" | Amira Gayatri")
	useEffect(() => {
		document.title = title
	}, [title])
}

export default useDocumentTitle

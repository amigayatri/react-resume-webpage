"use client"

import { DownloadPDFBase } from "./DownloadPDFBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { useTheme } from "styled-components"
import { DownloadPDFProps } from "../types.ts"

export const DownloadPDF = ({ resume, lng }: DownloadPDFProps) => {
	const { t } = useTranslation(lng, "resume")
	const theme = useTheme()
	return (
		<DownloadPDFBase
			isDark={theme.background === theme.almostBlack}
			lng={lng}
			resume={resume}
			t={t}
		/>
	)
}
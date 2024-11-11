"use client"

import TranslatedResume from "../../../types/resume/TranslatedResumeProps.ts"
import { DownloadPDFBase } from "./DownloadPDFBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { useTheme } from "styled-components"

export interface DownloadPDFProps {
	resume: TranslatedResume
	lng: string
}

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

export default DownloadPDF

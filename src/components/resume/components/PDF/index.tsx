import { useTheme } from "styled-components"
import { useTranslation } from "../../../../i18n/client"
import { DownloadPDFProps } from "../../types.ts"
import { DownloadPDFBase } from "./DownloadPDFBase.tsx"

export const DownloadPDF = async ({ resume, lng }: DownloadPDFProps) => {
    const { t } = await useTranslation(lng, "resume")
    const theme = useTheme()
    return <DownloadPDFBase isDark={theme.background === theme.almostBlack} lng={lng} resume={resume} t={t} />
}

import { dir } from "i18next"
import { useTranslation } from "../i18n"
import { fallbackLng, languages } from "../i18n/settings"
import StyledComponentsRegistry from "../lib/registry"
import { PageProps } from "../types/common/"

export async function useGenerateMetadata({ params }: PageProps) {
    let { lng } = await params
    if (languages.indexOf(lng) < 0) {
        lng = fallbackLng
    }
    const { t } = await useTranslation(lng, "metadata")
    return {
        title: {
            default: t("base-title", { pathTitle: t("path.404") })
        },
        content: t("content")
    }
}
interface RootLayoutProps extends PageProps {
    children: React.ReactNode
}
export default async function RootLayout({ children, params }: RootLayoutProps) {
    let { lng } = await params
    if (languages.indexOf(lng) < 0) {
        lng = fallbackLng
    }
    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'); @import
                    url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
                </style>
            </head>
            <body>
                <div id="root">
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </div>
            </body>
        </html>
    )
}

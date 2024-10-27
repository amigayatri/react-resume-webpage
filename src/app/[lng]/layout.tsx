import { dir } from "i18next"
import { languages, fallbackLng } from "../i18n/settings"
import { useTranslation } from "../i18n"
import StyledComponentsRegistry from "../lib/registry"
import ThemeClient from "../components/common/ThemeClient"

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({
	params
}: {
	params: {
		lng: string
	}
}) {
	let { lng } = await params
	if (languages.indexOf(lng) < 0) lng = fallbackLng
	const { t } = await useTranslation(lng)
	return {
		title: t("title"),
		content:
			"A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
	}
}

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: {
		lng: string
	}
}) {
	const { lng } = await params

	return (
		<html lang={lng} dir={dir(lng)}>
			<head>
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;700&display=swap');
					@import
					url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
					@import
					url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
				</style>
			</head>
			<body>
				<div id="root">
					<StyledComponentsRegistry>
						<ThemeClient>{children}</ThemeClient>
					</StyledComponentsRegistry>
				</div>
			</body>
		</html>
	)
}

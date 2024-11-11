"use client"

import { ThemeProvider } from "styled-components"
import { Monokai } from "../../../themes/Monokai"
import { Named } from "../../../themes/Named"
import { Footer } from "../Footer/client"
import { Header } from "../Header/client"
import { DefaultDark } from "../../../themes/DefaultDark"
import { DefaultLight } from "../../../themes/DefaultLight"
import { GlobalStyle } from "../../../app/Global.styled"
import { useState } from "react"
import Element from "../../../types/common/ElementProps"

interface ThemeClientProps extends Element {
	children: React.ReactNode
	onError: boolean
}

export default function ThemeClient({
	children,
	lng,
	onError
}: ThemeClientProps) {
	const [theme, setTheme] = useState("dark")
	const handleTheme = () => {
		if (theme === "dark") setTheme("light")
		else setTheme("dark")
	}
	if (onError) {
		return (
			<ThemeProvider theme={theme === "dark" ? DefaultDark : DefaultLight}>
				<ThemeProvider theme={Named}>
					<GlobalStyle />
				</ThemeProvider>
				<ThemeProvider theme={Monokai}>{children}</ThemeProvider>
			</ThemeProvider>
		)
	}
	return (
		<ThemeProvider theme={theme === "dark" ? DefaultDark : DefaultLight}>
			<ThemeProvider theme={Named}>
				<GlobalStyle />
				<Header
					onError={onError}
					theme={theme}
					changeTheme={handleTheme}
					lng={lng}
				/>
			</ThemeProvider>
			<ThemeProvider theme={Monokai}>{children}</ThemeProvider>
			<ThemeProvider theme={Named}>
				<Footer lng={lng} />
			</ThemeProvider>
		</ThemeProvider>
	)
}

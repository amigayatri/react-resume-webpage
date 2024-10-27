"use client"

import { ThemeProvider } from "styled-components"
import { Monokai } from "../../../themes/Monokai"
import { GlobalStyle } from "../../../Global.styled"
import { DefaultLight } from "../../../themes/DefaultLight"

export default function ThemeClient({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<ThemeProvider theme={Monokai}>
			<ThemeProvider theme={DefaultLight}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</ThemeProvider>
	)
}

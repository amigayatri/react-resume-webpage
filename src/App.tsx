import { BrowserRouter} from "react-router-dom"
import Footer from "./components/common/Footer"
import GlobalStyle from "./Global.styled"
import Menu from "./components/common/Menu"
import { ThemeProvider } from "styled-components"
import DefaultDark from "./themes/DefaultDark"
import DefaultLight from "./themes/DefaultLight"
import Named from "./themes/Named"
import Monokai from "./themes/Monokai"
import { useState } from "react"
import Router from "./Router"
import { useTranslation } from "react-i18next"
import { getLangDir } from "rtl-detect"

const App = () => {
	const [theme, setTheme] = useState("light")
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light")
	}
	const { i18n } = useTranslation()
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme === "light" ? DefaultLight : DefaultDark}>
				<ThemeProvider theme={Named}>
					<GlobalStyle
						$isAmplified={false}
						$isRTL={getLangDir(i18n.language) === "rtl"}
					/>
					<Menu changeTheme={themeToggler} theme={theme} />
				</ThemeProvider>
				<ThemeProvider theme={Monokai}>
					<Router />
				</ThemeProvider>
				<ThemeProvider theme={Named}>
					<Footer />
				</ThemeProvider>
			</ThemeProvider>
		</BrowserRouter>
	)
}
export default App

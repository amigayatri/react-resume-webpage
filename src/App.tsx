import { BrowserRouter} from "react-router-dom"
import Footer from "./components/common/Footer"
import GlobalStyle from "./Global.styled"
import Menu from "./components/common/Menu/Menu"
import { ThemeProvider } from "styled-components"
import DefaultDark from "./themes/DefaultDark"
import DefaultLight from "./themes/DefaultLight"
import { useState } from "react"
import Router from "./Router"

const App = () => {
	const [theme, setTheme] = useState("light")
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light")
	}

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme === "light" ? DefaultLight : DefaultDark}>
				<GlobalStyle />
				<Menu changeTheme={themeToggler} theme={theme} />
				<Router />
				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	)
}
export default App

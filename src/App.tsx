import { BrowserRouter} from "react-router-dom"
import { Footer } from "./components/global/Footer"
import { GlobalStyle } from "./Global"
import { Menu } from "./components/global/Menu/Menu"
import { ThemeProvider } from "styled-components"
import DefaultDark from "./themes/DefaultDark"
import DefaultLight from "./themes/DefaultLight"
import { useState } from "react"
import Router from "./pages/Router"

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

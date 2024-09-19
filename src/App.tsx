import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Resume } from "./pages/Resume"
import { Colors } from "./pages/Colors"
import { Footer } from "./components/global/Footer/Footer"
import { GlobalStyle } from "./Global"
import { Menu } from "./components/global/Menu/Menu"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./components/Themes/Themes"
import { useState } from "react"

const App = () => {
	const [theme, setTheme] = useState("light")
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light")
	}

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				<GlobalStyle />
				<Menu changeTheme={themeToggler} theme={theme} />
				<Routes>
					<Route path="/" element={<Resume />} />
					<Route path="/resume/" element={<Resume />} />
					<Route path="/colors/" element={<Colors />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	)
}
export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/resume//Header";
import { Footer } from "./components/global/Footer";
import { GlobalStyle } from "./Global";
import { Menu } from "./components/global/Menu";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./components/global/Themes"
import { useState } from "react";

const App = () => {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Menu changeTheme={themeToggler} theme={theme} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;

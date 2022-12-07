import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles";
import LandingPage from "./pages/LandingPage/LandingPage";
import { ThemeProvider } from "styled-components";
import { customTheme } from "./assets/customTheme";
function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<>
				<GlobalStyle />
				<Routes>
					<Route path='/' element={<LandingPage />} />
				</Routes>
			</>
		</ThemeProvider>
	);
}

export default App;

import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles";
import { ThemeProvider } from "styled-components";
import { customTheme } from "./assets/customTheme";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import LandingPage from "./pages/LandingPage/LandingPage";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import navData from "./components/Navigation/navData.json";
function App() {
	const { navLinks } = navData;
	const navComponents = [
		<LandingPage />,
		<About />,
		<Blogs />,
		<Clients />,
		<Contact />,
	];
	return (
		<ThemeProvider theme={customTheme}>
			<>
				<GlobalStyle />
				<Navigation />
				<Routes>
					{navLinks.map((option, component) => (
						<Route
							path={option.link}
							element={navComponents[component]}
						/>
					))}
				</Routes>
			</>
		</ThemeProvider>
	);
}

export default App;

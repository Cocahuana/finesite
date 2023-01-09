import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import LandingPage from "./pages/LandingPage/LandingPage";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/Contact/Contact";
import navData from "./data/navData.json";
import { motion } from "framer-motion";
import Footer from "./components/Footer/Footer";

const PageLayout = ({ children }) => children;

const pageVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};
const pageTransition = {
	type: "tween",
	ease: "linear",
	duration: 0.7,
};

const AnimationLayout = () => {
	const { pathname } = useLocation();
	return (
		<PageLayout>
			<motion.div
				key={pathname}
				initial='initial'
				animate='in'
				variants={pageVariants}
				transition={pageTransition}
			>
				<Outlet />
			</motion.div>
		</PageLayout>
	);
};
function App() {
	const { navLinks } = navData;
	const navComponents = [
		<About />,
		<Blogs />,
		<LandingPage />,
		<Clients />,
		<Contact />,
	];
	return (
		<>
			<Navigation />
			<Routes>
				<Route element={<AnimationLayout />}>
					{navLinks.map((option, component) => (
						<Route
							key={component}
							path={option.link}
							element={navComponents[component]}
						/>
					))}
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;

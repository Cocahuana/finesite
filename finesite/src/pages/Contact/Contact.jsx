import { Flex, Box, Image, Spacer } from "@chakra-ui/react";
import Hero from "../../components/Hero/Hero";
import ContactForm from "./Components/ContactForm";
import SVGWomenAtComputer from "./Components/womenPcSVG.svg";
import styled from "styled-components";
const ContactSection = styled.div`
	display: flex;
	justify-content: space-evenly;
	min-height: 50vh;
	width: 100%;
	// padding-left: 15%;
	// padding-right: 20%;
	background: linear-gradient(
		180deg,
		rgba(27, 27, 27, 0) 0%,
		rgba(37, 37, 37, 0.3) 10.94%,
		rgba(43, 43, 43, 0.55) 25%,
		rgba(48, 48, 48, 0.8) 45.83%
	);
`;
const Space = styled.div`
	min-height: 20vh;
	width: 100%;
`;
function Contact() {
	return (
		<Box>
			<Hero
				title='Contact us!'
				subtitle='Questions, projects, applications, and more.'
			/>
			<Space />
			<ContactSection>
				<Image src={SVGWomenAtComputer} alt='svg women' />
				<Box minW='700px'>
					<ContactForm h='100%' />
				</Box>
			</ContactSection>
		</Box>
	);
}

export default Contact;

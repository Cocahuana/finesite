import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import ContactForm from "./Components/ContactForm";
import SVGWomenAtComputer from "./Components/womenPcSVG.svg";
import styled from "styled-components";
import { TextCard, Hero } from "../../components";
const ContactSection = styled.div`
	display: flex;
	justify-content: space-evenly;
	min-height: 50vh;
	width: 100%;
	// padding-left: 15%;
	// padding-right: 20%;
`;

const BackgroundLight = styled.div`
	background: linear-gradient(
		180deg,
		rgba(27, 27, 27, 0) 0%,
		rgba(37, 37, 37, 0.3) 10.94%,
		rgba(43, 43, 43, 0.55) 25%,
		rgba(48, 48, 48, 0.8) 45.83%
	);
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 33.125rem;
`;

const Space = styled.div`
	min-height: 20vh;
	width: 100%;
`;

const TextCardSection = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-evenly;
	height: 50vh;
`;

const Row = styled.div`
	display: flex;

	justify-content: space-evenly;
	// 1310px
`;

function Contact() {
	const textData = {
		firstRow: [
			{
				boldText: "Free consulting",
				text: "You can ask our agency anything you want to know about web development and how we work to ensure you experience the best of it. For free!",
			},
			{
				boldText: "Are you contacting in regards of a project?",
				text: "Include your full name and a little description about the project. We will be glad to schedule a future meeting talking about your project in depth.",
			},
		],
		secondRow: [
			{
				boldText: "FAQ Section",
				text: "If you have any questions you can always go check the FAQ section to see if your question is already answered there.",
			},
			{
				boldText: "Fast Response",
				text: "We will respond as fast as we can, making sure you get what you intended to. Usually this takes no more than 2 hours.",
			},
		],
	};
	return (
		<Box>
			<Hero
				title='Contact us!'
				subtitle='Questions, projects, applications, and more.'
			/>
			<Space />
			<BackgroundLight>
				<ContactSection>
					<Image src={SVGWomenAtComputer} alt='svg women' />
					<Box minW='700px'>
						<ContactForm h='100%' />
					</Box>
				</ContactSection>
				<TextCardSection>
					<Row>
						{textData.firstRow.map((card) => (
							<TextContainer>
								<Text fontSize='20px' fontWeight='700'>
									{card.boldText}
								</Text>
								<Text>{card.text}</Text>
							</TextContainer>
						))}
					</Row>
					<Row>
						{textData.secondRow.map((card) => (
							<TextContainer>
								<Text fontSize='20px' fontWeight='700'>
									{card.boldText}
								</Text>
								<Text>{card.text}</Text>
							</TextContainer>
						))}
					</Row>
				</TextCardSection>
			</BackgroundLight>
		</Box>
	);
}

export default Contact;

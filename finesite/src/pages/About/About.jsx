import { Flex, Box, Heading, Center, Text, Image } from "@chakra-ui/react";
import { CustomCards, CustomCard, ArrowDown, Button } from "../../components";
import {
	IMG_UX,
	IMG_UI,
	IMGQAControl,
	IMGFrontend,
	IMGHappyn,
	IMGCompany5,
	IMGCompany4,
	IMGCompany3,
	IMGAdConstructura,
	IMGbackend,
	IMGMobile,
	IMGLaptop,
	IMGObelisco,
} from "./assets";
import data from "./data.json";
import { customTheme } from "../../assets/customTheme";
import LittleWrapper from "./LittleWrapper";
import LittleCard from "./LittleCard";
import Hero from "../../components/Hero/Hero";
import navData from "../../data/navData.json";
function About() {
	const { cards, processes } = data;
	const { navLinks } = navData;
	const clientsView = navLinks[3].link;
	const proccessesImgArr = [
		IMG_UX,
		IMG_UI,
		IMGFrontend,
		IMGbackend,
		IMGQAControl,
	];
	const arrCompanies = [
		IMGHappyn,
		IMGAdConstructura,
		IMGCompany3,
		IMGCompany4,
		IMGCompany5,
	];
	return (
		<Box px='12.5rem'>
			<Hero
				title={"Websites that work."}
				subtitle={"What’s behind them?"}
			/>
			<Flex w='full' minH='100vh'>
				<CustomCards>
					<CustomCard
						title={cards[0].title}
						text={cards[0].text}
						img={IMGObelisco}
					/>
					<CustomCard
						title={cards[1].title}
						text={cards[1].text}
						img={IMGLaptop}
						imgSide='left'
					/>
					<CustomCard
						title={cards[2].title}
						text={cards[2].text}
						img={IMGMobile}
					/>
				</CustomCards>
			</Flex>
			<Flex w='full' minH='100vh' flexDirection='column'>
				<Center my='6.25rem'>
					<Heading
						as='h2'
						fontWeight='700'
						fontSize='4rem'
						lineHeight='4.9375rem'
					>
						The Proccess
					</Heading>
				</Center>
				<LittleWrapper>
					<Flex justifyContent='space-between'>
						<LittleCard
							title={processes[0].title}
							text={processes[0].text}
							img={proccessesImgArr[0]}
						/>
						<LittleCard
							title={processes[1].title}
							text={processes[1].text}
							img={proccessesImgArr[1]}
						/>
					</Flex>
					<Flex
						justifyContent='space-between'
						borderBottom='5px solid rgba(255, 255, 255, 0.59)'
						borderTop='5px solid rgba(255, 255, 255, 0.59)'
					>
						<LittleCard
							title={processes[2].title}
							text={processes[2].text}
							img={proccessesImgArr[2]}
						/>
						<LittleCard
							title={processes[3].title}
							text={processes[3].text}
							img={proccessesImgArr[3]}
						/>
					</Flex>
					<Flex justifyContent='space-between'>
						<LittleCard
							title={processes[4].title}
							text={processes[4].text}
							img={proccessesImgArr[4]}
						/>
					</Flex>
				</LittleWrapper>
			</Flex>
			<Flex
				flexDirection='column'
				w='full'
				minH='30vh'
				alignItems='center'
				justifyContent='space-between'
				my='12.5rem'
			>
				<Text fontSize='1.5rem' color={customTheme.text.complementary2}>
					Some of our Clients:
				</Text>
				<Flex w='100%' justifyContent='space-between'>
					{arrCompanies.map((company) => (
						<Image pl='3.5%' src={company} alt={company} />
					))}
				</Flex>
				<Button goTo={clientsView}>See Our Work</Button>
			</Flex>
		</Box>
	);
}

export default About;

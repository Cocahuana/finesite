import { Flex, Box, Heading, Center } from "@chakra-ui/react";
import { CustomCards, CustomCard, ArrowDown } from "../../components";
import IMGObelisco from "./assets/obelisco.svg";
import IMGLaptop from "./assets/Image 2.svg";
import IMGMobile from "./assets/Image 3.svg";
import data from "./data.json";
import { customTheme } from "../../assets/customTheme";
function About() {
	const { cards } = data;
	return (
		<Box px='12.5rem'>
			<Flex w='full' minH='85vh'>
				<Flex
					flexDirection='column'
					w='100%'
					alignItems='center'
					justifyContent='center'
				>
					<Flex
						flexDirection='column'
						h='90%'
						alignItems='center'
						justifyContent='center'
					>
						<Heading as='h5' fontSize='5.75rem' my='0.78125rem'>
							Websites that work.
						</Heading>
						<Heading
							my='0.78125rem'
							as='h2'
							fontSize='3rem'
							color={customTheme.text.white}
						>
							What’s behind them?
						</Heading>
					</Flex>
					<ArrowDown />
				</Flex>
			</Flex>
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
			<Flex bg='yellow' w='full' h='100vh'>
				About page
			</Flex>
			<Flex bg='violet' w='full' h='100vh'>
				About page
			</Flex>
		</Box>
	);
}

export default About;

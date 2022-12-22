import { Flex, Box, Heading, Center } from "@chakra-ui/react";
import { CustomCards, CustomCard, ArrowDown } from "../../components";
import {
	IMG_UX,
	IMG_UI,
	IMGQAControl,
	IMGHappyn,
	IMGFrontend,
	IMGCompany5,
	IMGCompany4,
	IMGCompany3,
	IMGbackend,
	IMGAdConstructura,
	IMGMobile,
	IMGLaptop,
	IMGObelisco,
} from "./assets";
import data from "./data.json";
import { customTheme } from "../../assets/customTheme";
import LittleWrapper from "./LittleWrapper";
import LittleCard from "./LittleCard";
function About() {
	const { cards, processes } = data;
	const proccessesImgArr = [
		IMG_UX,
		IMG_UI,
		IMGFrontend,
		IMGbackend,
		IMGQAControl,
	];
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
			<Flex bg='violet' w='full' h='100vh'>
				About page
			</Flex>
		</Box>
	);
}

export default About;

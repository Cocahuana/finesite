import { Flex, Box } from "@chakra-ui/react";
import { CustomCards, CustomCard } from "../../components";
import IMGObelisco from "./assets/obelisco.svg";
import IMGLaptop from "./assets/Image 2.svg";
import IMGMobile from "./assets/Image 3.svg";
import data from "./data.json";
function About() {
	const { cards } = data;
	return (
		<Box px='12.5rem'>
			<Flex bg='blue' w='full' h='100vh'>
				About page
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

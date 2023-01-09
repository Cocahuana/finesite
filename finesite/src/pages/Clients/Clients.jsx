import { Flex, Box, Image, Grid, GridItem, Text } from "@chakra-ui/react";
import IMG_AdConstructora from "./assets/ad-constructora.png";
import cell from "./assets/cell.png";
import coffee from "./assets/coffee.png";
import { Button, Hero } from "../../components";
import { FlexCenter, FlexJustify } from "../../components/ui/Boxes/Boxes";
import FlipCard from "./FlipCard";
import navData from "../../data/navData.json";
function Clients() {
	const projects = [
		{
			name: "AD Constructora",
			img: IMG_AdConstructora,
		},
		{
			name: "NAME",
			img: IMG_AdConstructora,
		},
		{
			name: "NAME",
			img: cell,
		},
		{
			name: "NAME",
			img: cell,
		},
		{
			name: "NAME",
			img: coffee,
		},
		{
			name: "NAME",
			img: coffee,
		},
	];
	const { navLinks } = navData;
	const contactForm = navLinks[4].link;
	return (
		<Box w='100%'>
			<Flex w='100%' justifyContent='center'>
				<Box w='60.25rem'>
					<Hero
						title='Our Work'
						subtitle='Get detailed information about our most recent projects and case studies.'
						textAlign='center'
					/>
				</Box>
			</Flex>
			<Box w='100%' minH='100vh'>
				<Grid
					templateRows='repeat(2, 1fr)'
					templateColumns='repeat(3, 1fr)'
					rowGap='110px'
					columnGap='37.5px'
					justifyItems='center'
					py='3rem'
				>
					{projects.map((project, key) => (
						<GridItem w='392px' h='692px' key={key}>
							<Text fontSize='40px' mb='28px' textAlign='center'>
								{project.name}
							</Text>
							<FlipCard w='392px' h='692px'>
								<Image alt={project.name} src={project.img} />
								<Flex alignItems='flex-end' w='100%' h='100%'>
									<Text fontSize='2rem'>
										test test test test test test test test
										test test test test test test test test
										test set test test test test test test
										test tse tes
									</Text>
								</Flex>
							</FlipCard>
						</GridItem>
					))}
				</Grid>
			</Box>
			<Box w='100%' my='10rem'>
				<FlexCenter>
					<Button goTo={contactForm}>Contact Us</Button>
				</FlexCenter>
			</Box>
		</Box>
	);
}

export default Clients;

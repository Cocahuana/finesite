import { Flex, Box, Image, Grid, GridItem, Text } from "@chakra-ui/react";
import IMG_AdConstructora from "./assets/ad-constructora.png";
import { Button, Hero } from "../../components";
import { FlexCenter, FlexJustify } from "../../components/ui/Boxes/Boxes";
import styled from "styled-components";
import FlipCard from "./FlipCard";

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
			name: "333333",
			img: IMG_AdConstructora,
		},
		{
			name: "444444",
			img: IMG_AdConstructora,
		},
		{
			name: "555555",
			img: IMG_AdConstructora,
		},
		{
			name: "666666",
			img: IMG_AdConstructora,
		},
	];
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
							<FlipCard>
								<div>
									<Image
										alt={project.name}
										src={project.img}
									/>
								</div>
								<div>
									<Text>Soy la parte de atrás</Text>{" "}
								</div>
							</FlipCard>
						</GridItem>
					))}
				</Grid>
			</Box>
			<Box w='100%' my='10rem'>
				<FlexCenter>
					<Button>Contact Us</Button>
				</FlexCenter>
			</Box>
		</Box>
	);
}

export default Clients;

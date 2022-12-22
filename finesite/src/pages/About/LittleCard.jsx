import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
function LittleCard({ title, text, img }) {
	return (
		<Flex my='1rem' w='47.5%'>
			<Image w='11.5rem' h='8.9375rem' src={img} mr='1.6875rem' />
			<Flex flexDirection='column'>
				<Heading as='h5' fontSize='1.875rem' lineHeight='2.3125rem'>
					{title}
				</Heading>
				<Text fontSize='1.3125rem' lineHeight='289.9%'>
					{text}
				</Text>
			</Flex>
		</Flex>
	);
}

export default LittleCard;

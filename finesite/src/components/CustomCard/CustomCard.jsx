import React from "react";
import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";
const Space = styled.div`
	width: 5.1875rem;
	height: 100%;
`;
function CustomCard({ title, text, img, imgSide }) {
	const content = (
		<Flex w='40%' flexDirection='column'>
			<Heading as='h3' fontSize='3.4375rem'>
				{title}
			</Heading>
			<Text lineHeight='3.9375rem' fontSize='1.3125rem' fontWeight='500'>
				{text}
			</Text>
		</Flex>
	);
	const picture = <Image w='40%' src={img} />;
	return (
		<>
			<Flex
				w='100%'
				justifyContent='space-between'
				textAlign='justify'
				my='7.8125rem'
			>
				{imgSide === "left" ? (
					<>
						{picture}
						<Space />
						{content}
					</>
				) : (
					<>
						{content}
						<Space />
						{picture}
					</>
				)}
			</Flex>
		</>
	);
}

export default CustomCard;

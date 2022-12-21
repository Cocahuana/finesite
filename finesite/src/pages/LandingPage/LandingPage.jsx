import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import WrapperWithSVG from "./components/WrapperWithSVG";
import ContentCard from "./components/ContentCard";
import contentData from "./components/data/content.json";
import Packages from "./components/Packages";
import {
	Button,
	ArrowDown,
	PersonWithLaptop,
	PersonTouchingCellphone,
	ThreeDevices,
} from "../../components";
function LandingPage() {
	const { services } = contentData;
	return (
		<Box overflow='hidden'>
			<Flex
				w='full'
				minH={{ base: "85vh", xl: "80vh" }}
				maxH={{ base: "85vh", xl: "80vh" }}
				flexDirection={"column"}
				justifyContent='space-between'
				alignItems='center'
				py='2%'
				px={{ base: "2rem", xl: "9.375rem" }}
			>
				<Flex w='100%' minH='70vh'>
					<Flex
						w={{ base: "100%", xl: "50%" }}
						flexDirection={"column"}
						alignItems={{ base: "center", xl: "flex-start" }}
						justifyContent={{
							base: "space-evenly",
							xl: "flex-end",
						}}
					>
						<Flex
							flexDirection={"column"}
							alignItems={{
								base: "center",
								xl: "flex-start",
							}}
							justifyContent='space-evenly'
							letterSpacing='0.055rem'
							mb='2rem'
							h={{ base: "80%", xl: "auto" }}
						>
							<Heading
								as='h1'
								fontSize='7.5rem'
								my={{ xl: "1rem" }}
								fontWeight='400'
							>
								Finesite
							</Heading>
							<Text fontSize='3rem' my={{ xl: "1rem" }}>
								Branding & Design Agency
							</Text>
							<Text fontSize='2rem' my={{ xl: "1rem" }}>
								Create. Design. Inspire
							</Text>
						</Flex>
						<Button w='auto'>See Our Work</Button>
					</Flex>
					<Flex
						display={{ base: "none", xl: "flex" }}
						w='50%'
						py='2%'
					>
						<PersonWithLaptop />
					</Flex>
				</Flex>
				<Box>
					<ArrowDown />
				</Box>
			</Flex>

			<Flex
				w='full'
				minH='100vh'
				flexDirection='column'
				px={{ base: "2rem", xl: "9.375rem" }}
			>
				<WrapperWithSVG imgSide='right' img={<ThreeDevices />}>
					<ContentCard
						title={services[0].title}
						text={services[0].text}
					/>
					<ContentCard
						title={services[1].title}
						text={services[1].text}
					/>
				</WrapperWithSVG>

				<WrapperWithSVG
					imgSide='left'
					img={<PersonTouchingCellphone />}
				>
					<ContentCard
						title={services[2].title}
						text={services[2].text}
					/>
					<ContentCard
						title={services[3].title}
						text={services[3].text}
					/>
				</WrapperWithSVG>
			</Flex>
			<Flex
				bg='linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, rgba(37, 37, 37, 0.3) 10.94%, rgba(43, 43, 43, 0.55) 25%, rgba(48, 48, 48, 0.8) 45.83%)'
				w='full'
				minH='100vh'
				mt='10rem'
				alignItems='center'
				justifyContent='center'
				flexDirection='column'
				fontWeight={700}
				px={{ base: "2rem", xl: "0" }}
			>
				<Packages />
			</Flex>
		</Box>
	);
}

export default LandingPage;

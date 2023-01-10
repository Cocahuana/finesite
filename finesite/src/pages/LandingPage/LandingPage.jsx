import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import WrapperWithSVG from "./components/WrapperWithSVG";
import ContentCard from "./components/ContentCard";
import contentData from "./components/data/content.json";
import Packages from "./components/Packages";
import navData from "../../data/navData.json";
import {
	Button,
	ArrowDown,
	PersonWithLaptop,
	PersonTouchingCellphone,
	ThreeDevices,
} from "../../components";
function LandingPage() {
	const { services } = contentData;
	const { navLinks } = navData;
	const clientsView = navLinks[3].link;
	return (
		<Box overflow='hidden'>
			<Flex
				w='full'
				minH={{ base: "30vh", xl: "80vh" }}
				maxH={{ base: "85vh", xl: "80vh" }}
				flexDirection={"column"}
				justifyContent='space-between'
				alignItems='center'
				py='2%'
				px={{ base: "2rem", xl: "9.375rem" }}
			>
				<Flex w='100%' minH='30vh'>
					<Flex
						w={{ base: "100%", xl: "50%" }}
						flexDirection={"column"}
						alignItems='flex-start'
						justifyContent={{
							base: "space-evenly",
							xl: "flex-end",
						}}
					>
						<Flex
							flexDirection={"column"}
							alignItems='flex-start'
							justifyContent='space-evenly'
							letterSpacing='0.055rem'
							mb='2rem'
							h={{ xl: "auto" }}
						>
							<Heading
								as='h1'
								fontSize={{ base: "2.5rem", xl: "7.5rem" }}
								my={{ base: "3px", xl: "1rem" }}
							>
								Finesite
							</Heading>
							<Text
								fontSize={{ base: "24px", xl: "3rem" }}
								my={{ base: "3px", xl: "1rem" }}
							>
								Branding & Design Agency
							</Text>
							<Text
								fontSize={{ base: "18px", xl: "2rem" }}
								my={{ base: "3px", xl: "1rem" }}
							>
								Create. Design. Inspire
							</Text>
						</Flex>
						<Button w='auto' goTo={clientsView}>
							See Our Work
						</Button>
					</Flex>
					<Flex
						display={{ base: "none", xl: "flex" }}
						w='50%'
						py='2%'
					>
						<PersonWithLaptop />
					</Flex>
				</Flex>
				<Box display={{ base: "none", xl: "block" }}>
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
				minH='50vh'
				mt={{ base: "0px", xl: "10rem" }}
				alignItems='center'
				justifyContent='center'
				flexDirection='column'
				fontWeight={700}
				px={{ base: "1.7rem", xl: "0" }}
			>
				<Packages />
			</Flex>
		</Box>
	);
}

export default LandingPage;

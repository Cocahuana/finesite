// import goldenLogoNoText from "../../assets/images/LogoGoldenNoText.svg";
import Button from "../../components/ui/Button/Button";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import ArrowDown from "../../components/ui/SVG/ArrowDown";
import PersonWithLaptop from "../../components/ui/SVG/PersonWithLaptop";
import PersonTouchingCellphone from "../../components/ui/SVG/PersonTouchingCellphone";
import ThreeDevices from "../../components/ui/SVG/ThreeDevices";
import { customTheme } from "../../assets/customTheme";
import WrapperWithSVG from "./components/WrapperWithSVG";
import ContentCard from "./components/ContentCard";
import contentData from "./components/data/content.json";
import Packages from "./components/Packages";
import Footer from "../../components/Footer/Footer";
// import { Link } from "react-router-dom";
function LandingPage() {
	const { services } = contentData;
	return (
		<Box>
			<Flex
				w='full'
				minH='80vh'
				maxH='80vh'
				flexDirection={"column"}
				justifyContent='space-between'
				alignItems='center'
				py='2%'
				mx='9.375rem'
			>
				<Flex w='100%' minH='70vh'>
					<Flex
						w='50%'
						flexDirection={"column"}
						alignItems='flex-start'
						justifyContent='flex-end'
					>
						<Flex
							flexDirection={"column"}
							alignItems='flex-start'
							justifyContent='space-evenly'
							letterSpacing='0.055rem'
							mb='2rem'
						>
							<Heading
								as='h1'
								fontSize='7.5rem'
								my='1rem'
								color={customTheme.text.accent}
								fontWeight='400'
							>
								Finesite
							</Heading>
							<Text fontSize='3rem' my='1rem'>
								Branding & Design Agency
							</Text>
							<Text fontSize='2rem' my='1rem'>
								Create. Design. Inspire
							</Text>
						</Flex>
						<Button w='auto'>See Our Work</Button>
					</Flex>
					<Flex w='50%' py='2%'>
						<PersonWithLaptop />
					</Flex>
				</Flex>

				<ArrowDown />
			</Flex>
			<Flex w='full' minH='100vh' flexDirection='column' mx='9.375rem'>
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
			>
				<Packages />
			</Flex>
			<Footer />
		</Box>
	);
}

export default LandingPage;

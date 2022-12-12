// import goldenLogoNoText from "../../assets/images/LogoGoldenNoText.svg";
import Button from "../../components/ui/Button/Button";
import { Flex, Text, Heading } from "@chakra-ui/react";
import ArrowDown from "../../components/ui/SVG/ArrowDown";
import PersonWithLaptop from "../../components/ui/SVG/PersonWithLaptop";
import PersonTouchingCellphone from "../../components/ui/SVG/PersonTouchingCellphone";
import ThreeDevices from "../../components/ui/SVG/ThreeDevices";
import SVGLogo from "../../components/ui/SVG/SVGLogo";
// import { Link } from "react-router-dom";
function LandingPage() {
	return (
		<>
			<Flex w='full' h='100vh' flexDirection={"column"}>
				<Heading as='h2' fontSize='7.5rem'>
					Finesite
				</Heading>
				<Heading as='h3' fontSize='3rem'>
					Branding & Design Agency
				</Heading>
				<Heading as='h4' fontSize='2rem'>
					Create. Design. Inspire
				</Heading>
				<Button>See Our Work</Button>
				<ArrowDown />
				<PersonWithLaptop />
				<PersonTouchingCellphone />
			</Flex>
			<Flex bg='green' w='full' h='100vh'>
				<Heading as='h2' fontSize='2rem' color='#F7DB5F'>
					Efficient & Reliable Web Design
				</Heading>
				<Text fontSize={"20px"}>
					We deliver top quality web-services that will simplify
					everything for your business. Website design, redesign,
					development, SEO and maintenance. We provide an efficient
					service while paying very careful attention to every aspect
					of your website.
				</Text>
				<Heading as='h2' fontSize='2rem' color='#F7DB5F'>
					Efficient & Reliable Web Design
				</Heading>
				<Text fontSize='20px'>
					Our designs adjust its layout and content to best fit every
					device and viewport, whether that's desktop, laptop, tablet
					or smartphone. This allows for a consistent experience for
					users no matter how they access the site.
				</Text>
				<ThreeDevices />
				<Heading as='h2' fontSize='2rem' color='#F7DB5F'>
					Search Engine Optimization (SEO)
				</Heading>
				<Text fontSize={"20px"}>
					We ensure that your website appears in the top of the search
					results using our knowledge on keyword research, on-page
					optimization, use of keyword-rich titles and descriptions,
					unique content creation and link building.
				</Text>
				<Heading as='h2' fontSize='2rem' color='#F7DB5F'>
					Efficient & Reliable Web Design
				</Heading>
				<Text fontSize='20px'>
					Websites are one of the most effective ways to reach
					customers, build brand awareness, generate leads, and drive
					sales. Creating or redesigning your website can have a huge
					impact in your company, with results like increased traffic,
					higher search engine rankings and more customers overall.
				</Text>
			</Flex>
			<Flex bg='yellow' w='full' h='100vh'>
				<SVGLogo />
				<Text fontSize='64px'>Don’t know how much it’ll cost?</Text>
				<Text fontSize='32px'>
					See a list of templates that will guide you through our
					usual pricing.
				</Text>

				<Button>Select Package</Button>
				<Text fontSize='24px'>
					Templates serve as guides to best represent the approximate
					price of a future project
				</Text>
				<Text color='#a2903e' fontSize='16px'>
					Prices may vary between similar projects
				</Text>
			</Flex>
		</>
	);
}

export default LandingPage;

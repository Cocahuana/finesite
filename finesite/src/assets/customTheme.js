import { extendTheme } from "@chakra-ui/react";
const colors = {
	black: "#000000",
	white: "#fff",
	lightYellow: "#F7DC5F",
	gray: "#ccc",
	complementary1: "#4d451e",
	complementary2: "#a2903e",
};

const fonts = {
	libreBaskerville: {
		regular: "Libre Baskerville, regular",
		italic: "Libre Baskerville, italic",
		bold: "Libre Baskerville, bold",
	},
	montserrat: {
		regular: "Montserrat, regular",
	},
};

export const customTheme = {
	bg: {
		base: colors.black,
		accent: colors.lightYellow,
		complementary: colors.complementary2,
		cta: colors.lightYellow,
	},
	text: {
		white: colors.white,
		black: colors.black,
		accent: colors.lightYellow,
		complementary2: colors.complementary2,
	},
	heading: colors.lightYellow,
	ff: {
		heading: fonts.libreBaskerville.regular,
		base: fonts.montserrat.regular,
	},
};
// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)

// Version 1: Using objects
export const chakrisTheme = extendTheme({
	fonts: {
		heading: fonts.libreBaskerville.regular,
		body: fonts.montserrat.regular,
	},
	styles: {
		global: {
			// styles for the `body`

			body: {
				bg: colors.black,
				color: colors.white,
				fontFamily: fonts.montserrat.regular,
				m: 0,
				p: 0,
			},
			// styles for the `h1,h2,h3,h4,h5`
			h1: {
				fontFamily: fonts.libreBaskerville.regular,
				color: colors.lightYellow,
				fontWeight: "400",
			},
			h2: {
				fontFamily: fonts.libreBaskerville.regular,
				color: colors.lightYellow,
				fontWeight: "400",
			},
			h3: {
				fontFamily: fonts.libreBaskerville.regular,
				color: colors.lightYellow,
				fontWeight: "400",
			},
			h4: {
				fontFamily: fonts.libreBaskerville.regular,
				color: colors.lightYellow,
				fontWeight: "400",
			},
			h5: {
				fontFamily: fonts.libreBaskerville.regular,
				color: colors.lightYellow,
				fontWeight: "400",
			},
			// styles for the `p`
			p: {
				fontFamily: fonts.montserrat,
				color: colors.white,
			},
		},
	},
});

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

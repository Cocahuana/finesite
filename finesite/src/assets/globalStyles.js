import { createGlobalStyle } from "styled-components";
import { customTheme } from "./customTheme";
const GlobalStyle = createGlobalStyle`

    body{
        margin: 0;
        padding: 0;
        background: ${customTheme.bg.base};
        color: ${customTheme.text.white};
        font-family: ${customTheme.ff.base};
    }
    h1,h2,h3,h4,h5,h6{
        font-family: ${customTheme.ff.heading};
    }
`;

export default GlobalStyle;

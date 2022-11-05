import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --red-700: #B91426;
        --blue-700: #0D4094;
        --yellow-700: #F7D756;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.primary};
		-webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button, p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    button {
        transform: filter 0.2s;
		&:hover{
			filter:brightness(0.9);
		}
    }
    input, button{
        cursor: pointer;
    }

    li {
        list-style: none;
    }
   
    p {
        font-size: 1rem;
        text-align: justify;
    }
    span {
        font-size: 0.875rem;
        font-weight: bold;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    
    @media (max-width: 768px) {
   html {
    font-size: 87,5%;
   }
  }
`;

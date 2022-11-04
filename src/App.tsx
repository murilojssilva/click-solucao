import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Home } from "./page/Home";
import defaultTheme from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

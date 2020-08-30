import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme, {GlobalStyle} from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

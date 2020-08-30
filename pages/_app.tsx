import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";

import theme, { GlobalStyle } from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title="深圳支流科技有限公司"
        titleTemplate="%s - 深圳支流科技有限公司"
        description="深圳支流科技有限公司"
      />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

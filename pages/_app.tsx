import App from 'next/app'
import type { AppProps, AppContext } from "next/app";
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

import theme, { GlobalStyle } from "../theme";
import { appWithTranslation } from "../i18n";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title="深圳支流科技有限公司"
        titleTemplate="%s - 深圳支流科技有限公司"
        description="深圳支流科技有限公司"
      />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);

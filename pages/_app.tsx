import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { TFunction } from "next-i18next";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import theme, { GlobalStyle } from "../theme";
import { appWithTranslation, withTranslation } from "../i18n";

const MyApp = ({ Component, pageProps, t }: AppProps & { t: TFunction }) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title={t("company-name")}
        titleTemplate={`%s - ${t("company-name")}`}
        description={t("company-name")}
      />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="https://static.apiseven.com/202108/1640919356532-f7bd45a2-5892-4581-a52f-e16ddcbb72c5.png" />
        <meta
          name="360-site-verification"
          content="7a8950b2ab9e03e9668794870f777aa8"
        />
        <meta name="sogou_site_verification" content="JqlVhaW8xK" />
        <meta
          name="shenma-site-verification"
          content="ab196e369036a20df45bb78b041b1430_1629777066"
        />
      </Head>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(withTranslation("common")(MyApp as any));

import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";

import { withTranslation } from "../../i18n";
import { SWrapper } from "./style";

type Props = {
  t: TFunction;
};

const Contributor: NextPage<Props, any> = ({ t }) => {
  return (
    <SWrapper>
      <NextSeo title={t(`common:contributor-graph`)} />
      <Nav />
      <div className="iframeBox">
      <iframe src="https://contributor-graph.apiseven.com/" style={{width: "100%", height: "100vh"}}></iframe>
      </div>
      <FooterLinks />
      <Footer />
    </SWrapper>
  );
};

Contributor.getInitialProps = () => {
  return {};
};

export default withTranslation("contributor")(Contributor as any);

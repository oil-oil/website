import React, { useState, useEffect, useContext } from "react";
import { NextPage } from 'next';
import { I18nContext, TFunction } from "next-i18next";
import { NextSeo } from "next-seo";
import MobileDetect from "mobile-detect";

import { withTranslation } from "../../i18n";
import { SWrapper, SBox } from "./style";

type Props = {
  t: TFunction;
};

const Whitepaper: NextPage<Props, any> = ({ t }) => {
  const [isMobile, setIsMobile] = useState(true);
  const {
    i18n: { language },
  } = useContext(I18nContext);
  const targetURL_ZH = "https://static.apiseven.com/202108/API7-Whitepaper.pdf"
  const targetURL_EN = "https://static.apiseven.com/202108/API7-WhitePaper-EN.pdf"
  const targetLink = language === "zh-CN" ? targetURL_ZH : targetURL_EN

  useEffect(() => {
    setIsMobile(false);
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      setIsMobile(true);
      window.location.href = targetLink;
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <SWrapper>
      <NextSeo title={t(`common:whitepaper`)} />
      <SBox>
        <iframe width="100%" height="800px" src={`${targetLink}#view=fitH`} itemType="application/pdf"></iframe>
      </SBox>
    </SWrapper>
  );
};

Whitepaper.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"],
  };
};

export default withTranslation("whitepaper")(Whitepaper as any);

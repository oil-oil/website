import React, { useState, useEffect } from "react";
import { NextPage } from 'next';
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";
import MobileDetect from "mobile-detect";

import { withTranslation } from "../../i18n";
import { SWrapper, SBox } from "./style";

type Props = {
  t: TFunction;
};

const Whitepaper: NextPage<Props, any> = ({ t }) => {
  const [isMobile, setIsMobile] = useState(true);
  const targetURL = "https://api7-website-1301662268.cos.accelerate.myqcloud.com/202108/API7-Whitepaper.pdf"

  useEffect(() => {
    setIsMobile(false);
    const md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
      setIsMobile(true);
      window.location.href = targetURL;
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <SWrapper>
      <NextSeo title={t(`common:whitepaper`)} />
      <SBox>
        <iframe width="100%" height="800px" src={`${targetURL}#view=fitH`} itemType="application/pdf"></iframe>
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
